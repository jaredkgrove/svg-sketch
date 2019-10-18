class Sketch < ApplicationRecord
    has_many :elements
    # has_many :elementables, :through :elements
    # has_many :elementables, through: :elements, source_type: :elements_elementables
    accepts_nested_attributes_for :elements

    # def self.new_from_params(sketch_data)
    #     sketch = Sketch.new()
    #     binding.pry
    #     sketch_data['elements'].each do |element_data|
    #         Element.build_element_from_json(sketch, element_data)
    #     end
        
    #     sketch
    # end

    def create_sketch_elements_from_json(data)
        data['elements'].each do |element_data|
            if element_data['type'] == 'Circle'
                circle = Circle.create(element_data['properties'])
                element =  circle.create_element(sketch: self)
            elsif element_data['type'] == 'Rect'
                rect = Rect.create(element_data['properties'])
                element = rect.create_element(sketch: self)
            end
        end
    end
end
