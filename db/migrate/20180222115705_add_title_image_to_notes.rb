class AddTitleImageToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :title_image, :string
  end
end
