class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.references :vacation, foreign_key: true
      t.float :lat
      t.float :lng
      t.string :address

      t.timestamps
    end
  end
end
