class Api::PicsController < ApplicationController

    # before_action :authenticate_user

    def index 
        pics = Pic.all
        render json: pics, :include => :artist
    end

    def artist_pics
        pics = Pic.where("artist_id = #{params[:artistId]}")
        # binding.pry # current q -- how should I pass around artist Id to get it here
        render json: pics, :include => :artist
    end

    

end
