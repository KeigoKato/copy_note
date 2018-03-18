class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :user_id, foreign_key: true
      t.integer :tweet_id, foreign_key: true
      t.timestamps
    end
  end
end
