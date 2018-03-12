class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :thumbnail, ImageUploader

  has_many :notes
  has_many :deals, dependent: :destroy
  has_many :reviews

  # 売買の取引に関するリレーション定義
  has_many :deals_of_author, class_name: "Deal", foreign_key: "author_id"
  has_many :deals_of_subscriber, class_name: "Deal", foreign_key: "subscriber_id"
  has_many :notes_of_author, through: :deals_of_author, source: "note"
  has_many :notes_of_subscriber, through: :deals_of_subscriber, source: "note"
end
