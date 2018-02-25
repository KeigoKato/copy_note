class Deal < ApplicationRecord
  belongs_to :author, class_name: "User"
  belongs_to :subscriber, class_name: "User"
  belongs_to :note
end
