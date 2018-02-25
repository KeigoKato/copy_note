class RenamePurchasesToDeals < ActiveRecord::Migration[5.0]
  def change
    rename_table :purchases, :deals
  end
end
