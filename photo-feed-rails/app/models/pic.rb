class Pic < ApplicationRecord
    belongs_to :artist
    has_many :pic_collects
    has_many :users, through: :pic_collects

end
