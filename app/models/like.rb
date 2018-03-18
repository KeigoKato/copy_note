class Like < ApplicationRecord
  belongs_to :note, counter_cache: :likes_count
  belongs_to :user
end
