class Pic < ApplicationRecord
    belongs_to :artist
    has_many :users, through: :pics_users

end
