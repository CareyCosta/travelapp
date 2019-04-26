class Destination < ApplicationRecord
  belongs_to :vacation, required: false

  geocoded_by :address
  after_validation :geocode

  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode
end
