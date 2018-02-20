class RenameProfileColumnToNotes < ActiveRecord::Migration[5.0]
  def change
    rename_column :notes, :profile, :body
  end
end
