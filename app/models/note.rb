class Note < ApplicationRecord
  belongs_to :user
  mount_uploader :title_image, ImageUploader
end
