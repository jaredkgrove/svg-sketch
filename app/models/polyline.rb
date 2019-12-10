class Polyline < ApplicationRecord
    include ActiveModel::Validations
    has_one :element, as: :elementable, dependent: :destroy
    accepts_nested_attributes_for :element
    validates :stroke, :stroke_width, :stroke, presence: true
    validate :points_cannot_contain_null
 
    def points_cannot_contain_null
        if !self.points || self.points.downcase.include?('null')
            errors.add(:points, "can't contain null values")
        end
    end
end
