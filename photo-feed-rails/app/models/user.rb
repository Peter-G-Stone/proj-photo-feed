class User < ApplicationRecord
    has_secure_password
    has_many :picsusers
    has_many :pics, through: :picsusers

    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
