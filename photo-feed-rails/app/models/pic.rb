class Pic < ApplicationRecord
    belongs_to :artist
    has_many :picsusers
    has_many :users, through: :picsusers

end
