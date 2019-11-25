class Sketch < ApplicationRecord
    has_many :elements
    accepts_nested_attributes_for :elements
    
    def update_sketch_elements_from_json(data)
        data['elements'].each do |element_data|
            if !element_data['properties']['id']
                case element_data['type']
                when 'Circle'
                    elementable = Circle.create(element_data['properties'])
                when 'Rectangle'
                    elementable = Rectangle.create(element_data['properties'])
                when 'Line'
                    elementable = Line.create(element_data['properties'])
                when 'Polyline'
                    elementable = Polyline.create(element_data['properties'])
                end
                elementable.create_element(sketch: self) if elementable
            end
        end

    end
end
