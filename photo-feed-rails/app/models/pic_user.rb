class PicUser < ActiveRecord::Base
    belongs_to :pic
    belongs_to :user
  end
  