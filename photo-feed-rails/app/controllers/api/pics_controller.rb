class Api::PicsController < ApplicationController

    # before_action :authenticate_user

    def index 
        pics = Pic.all
        render json: pics, :include => :artist
    end

    def artistPics

        pics = Pic.where("artist_id = #{params[:artistId]}")
        render json: pics, :include => :artist
    end

    def likePic
        binding.pry
    end

end
