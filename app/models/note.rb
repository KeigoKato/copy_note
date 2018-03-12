class Note < ApplicationRecord
  mount_uploader :title_image, ImageUploader

  belongs_to :user
  has_many :reviews

  # 売買の取引に関するリレーションの定義
  has_many :deals, dependent: :destroy
  has_many :authors, through: :deals
  has_many :subscribers, through: :deals

end
