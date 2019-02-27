class PicsController < ApplicationController
    before_action :authenticate_user

    def index 
        render json: {url: 'https://i.imgur.com/OEeH3uT.jpg'}
    end
end
