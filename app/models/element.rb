class Element < ApplicationRecord
    belongs_to :sketch, touch: true
    belongs_to :elementable, polymorphic: true, dependent: :destroy
end
