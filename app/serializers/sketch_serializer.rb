class SketchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  attribute :created do |object|
    object.created_at.strftime("%Y-%m-%d at %H:%M")
  end
  attribute :last_updated do |object|
    object.updated_at.strftime("%Y-%m-%d at %H:%M")
  end
  attribute :public do |object|
    !object.user
  end
  has_many :elements, serializer: ElementSerializer

  link :sketch_url do |object|
    "/sketches/#{object.id}"
  end


      
    
  

end
