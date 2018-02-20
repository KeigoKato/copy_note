class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.integer :user_id, null: false, foreign_key: true
      t.text :profile

      t.timestamps
    end
  end
end
