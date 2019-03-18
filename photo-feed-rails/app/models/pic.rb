class Pic < ApplicationRecord
    belongs_to :artist
    has_many :pics_users
    has_many :users, through: :pics_users

end
