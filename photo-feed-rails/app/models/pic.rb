class Pic < ApplicationRecord
    belongs_to :artist
    has_many :pics_user
    has_many :users, through: :pics_user

end
