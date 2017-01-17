class UserResource < JSONAPI::Resource
  attributes :id, :name
  
  has_many :posts
  has_many :comments
end
