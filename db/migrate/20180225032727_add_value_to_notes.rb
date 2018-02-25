class AddValueToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :value, :integer, default: 0
  end
end
