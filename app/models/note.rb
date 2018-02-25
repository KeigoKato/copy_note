class Note < ApplicationRecord
  belongs_to :user
  has_many :purchases
  mount_uploader :title_image, ImageUploader
end
