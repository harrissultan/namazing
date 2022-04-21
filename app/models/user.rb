class User < ApplicationRecord
  has_many :namazs
  has_secure_password
end
