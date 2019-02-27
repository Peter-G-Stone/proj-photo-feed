class PicsController < ApplicationController

    def index 
        render json: {url: 'https://i.imgur.com/OEeH3uT.jpg'}
    end
end
