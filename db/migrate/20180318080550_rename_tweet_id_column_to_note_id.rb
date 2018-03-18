class RenameTweetIdColumnToNoteId < ActiveRecord::Migration[5.0]
  def change
    rename_column :likes, :tweet_id, :note_id
  end
end
