class Sketch < ApplicationRecord
    has_many :elements
    belongs_to :user, required: false
    accepts_nested_attributes_for :elements
    validates :name, presence: true
    # validates :name, uniqueness: true
    validate :unique_sketch_name_for_user, on: :create

    def unique_sketch_name_for_user
        if self.user
            if self.user.sketches.find_by(name: self.name)
                errors.add(:name, "User already has a sketch with this name")
            end
        else
            if Sketch.where(user_id: nil).find_by(name: self.name)
                errors.add(:name, "Public sketch with this name already exists")
            end
        end
    end
    
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
