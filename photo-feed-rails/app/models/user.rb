class User < ApplicationRecord
    has_secure_password
    has_many :pics, through: :pics_users

    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
