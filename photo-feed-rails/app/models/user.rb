class User < ApplicationRecord
    has_secure_password
    has_many :pics

    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
