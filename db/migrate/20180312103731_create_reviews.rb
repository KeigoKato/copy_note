class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :review
      t.integer :user_id, foreign_key: true
      t.integer :note_id, foreign_key: true

      t.timestamps
    end
  end
end
