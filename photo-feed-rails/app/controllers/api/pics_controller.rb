class Api::PicsController < ApplicationController

    def index 
        pics = Pic.all
        render json: pics, :include => :artist
    end

    

end
