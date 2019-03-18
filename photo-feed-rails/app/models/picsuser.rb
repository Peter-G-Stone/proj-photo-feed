class Picsuser < ActiveRecord::Base
    belongs_to :pic
    belongs_to :user
  end
  