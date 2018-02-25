class Purchases < ActiveRecord::Migration[5.0]
  def change
    drop_table :purchases
  end
end
