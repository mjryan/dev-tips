class PostResource < JSONAPI::Resource
  attributes :id, :title, :body
  has_many :comments
  has_many :user
end
