class Circle < ApplicationRecord
    has_one :element, as: :elementable, dependent: :destroy
    accepts_nested_attributes_for :element
    validates :cx, :cy, :r, :stroke, :fill, :stroke_width, presence: true
end
