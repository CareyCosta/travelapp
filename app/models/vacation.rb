class Vacation < ApplicationRecord
    has_many :destinations, dependent: :destroy
end
