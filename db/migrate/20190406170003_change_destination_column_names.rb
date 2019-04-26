class ChangeDestinationColumnNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :destinations, :lat, :latitude
    rename_column :destinations, :lng, :longitude
  end
end
