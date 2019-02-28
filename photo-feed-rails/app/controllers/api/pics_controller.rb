class Api::PicsController < ApplicationController
    before_action :authenticate_user

    def index 
        pics = Pic.all
        render json: pics, :include => :artist
    end
end
