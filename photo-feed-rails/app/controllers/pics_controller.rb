class PicsController < ApplicationController
    # before_action :authenticate_user

    def index 
        render json: Pic.all
    end
end
