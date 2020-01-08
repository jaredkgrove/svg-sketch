class Api::V1::SketchesController < ApplicationController
    before_action :set_sketch, only: [:show, :update, :destroy]

    def index
      if logged_in?
        @sketches = Sketch.where(user_id: nil).or(Sketch.where(user_id: current_user.id))
      else
        @sketches = Sketch.where(user_id: nil)
      end
      sketches_json = SketchSerializer.new(@sketches).serialized_json
      render json: sketches_json
    end
  
    def show
      if !@sketch.user || current_user === @sketch.user
        sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
        render json: sketch_json
      else
        render json: {errors: 'You are not authorized to view this resource'}, status: :unauthorized
      end
    end
  
    def create
      @sketch = Sketch.new(sketch_params)
      @sketch.user = current_user if logged_in?
      if @sketch.save
        sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
        render json: sketch_json, status: :created
      else
        render json: @sketch.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @sketch.update_sketch_elements_from_json(elements_attributes_params) if !@sketch.user || @sketch.user === current_user
      if @sketch.save
        sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
        render json: sketch_json
       else
         render json: @sketch.errors, status: :unprocessable_entity
       end
    end

    def destroy
      @sketch.destroy
      render json: params['id']
    end

    private
      def set_sketch
        @sketch = Sketch.find(params['id'])
      end
  
      def sketch_params
        params.require(:sketch).permit(:name)
      end

      def elements_attributes_params
        params.permit(elements: [:type, properties: [:id, :points, :cx, :cy, :x, :y, :width, :height, :r, :x1, :x2, :y1, :y2, :stroke, :fill, :stroke_width]])
      end
end
