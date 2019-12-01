class Api::V1::ElementsController < ApplicationController
    before_action :set_sketch
    before_action :set_element, only: [:show]#, :update, :destroy]

    def index
      elements_json = ElementSerializer.new(Sketch.elements).serialized_json
      render json: elements_json
    end
  
    def create
      @element = Element.new(element_params)
  
      if @element.save
        render json: @element, status: :created, location: @element
      else
        render json: @element.errors, status: :unprocessable_entity
      end
    end
  
    # # DELETE /users/1
    # def destroy
    #   @user.destroy
    # end
  
    private
      def set_sketch
        @sketch = Sketch.find(params[:sketch_id])
      end

      def set_element
        @element = Element.find(params[:id])
      end
  
      def element_params
        params.require(:element).permit()
      end
end
