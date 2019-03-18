class User < ApplicationRecord
    has_secure_password
    has_many :pic_collects
    has_many :pics, through: :pic_collects

    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
