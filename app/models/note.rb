class Note < ApplicationRecord
  mount_uploader :title_image, ImageUploader

  belongs_to :user

  has_many :deals
  has_many :authors, through: :deals
  has_many :subscribers, through: :deals

end
