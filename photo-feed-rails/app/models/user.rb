class User < ApplicationRecord
    has_secure_password
    has_many :pics_user
    has_many :pics, through: :pics_user

    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
