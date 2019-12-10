class Line < ApplicationRecord
    has_one :element, as: :elementable, dependent: :destroy
    accepts_nested_attributes_for :element
    validates :x1, :y1, :x2, :y2, :stroke, :stroke_width, presence: true
end
