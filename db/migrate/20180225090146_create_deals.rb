class CreateDeals < ActiveRecord::Migration[5.0]
  def change
    create_table :deals do |t|
      t.integer :author_id
      t.integer :subscriber_id
      t.integer :note_id

      t.timestamps
    end
  end
end
