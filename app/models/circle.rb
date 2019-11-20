class Circle < ApplicationRecord
    has_one :element, as: :elementable, dependent: :destroy
    accepts_nested_attributes_for :element
end
