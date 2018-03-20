class Note < ApplicationRecord
  mount_uploader :title_image, ImageUploader

  belongs_to :user
  has_many :reviews
  has_many :likes, dependent: :destroy

  def like_user(user_id)
    likes.find_by(user_id: user_id)
  end

  # 売買の取引に関するリレーションの定義
  has_many :deals, dependent: :destroy
  has_many :authors, through: :deals
  has_many :subscribers, through: :deals

  # タグ付けができるようにする。
  acts_as_taggable

end
