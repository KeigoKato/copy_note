class Note < ApplicationRecord
  mount_uploader :title_image, ImageUploader

  # belongs_to :author, class_name: User
  # belongs_to :subscriber, class_name: User
  # belongs_to :note


  # has_many :deals
  # has_many :authors, through: :deals
  # has_many :subscriber, through: :deals

end
