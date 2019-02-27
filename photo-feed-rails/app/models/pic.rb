class Pic < ApplicationRecord
    belongs_to :artist
    belongs_to :user, required: false
end
