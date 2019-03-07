class Api::ArtistsController < ApplicationController


    def show
        @artist = Artist.find(params[:id]) 
        pics = @artist.pics       
        render json: pics, :include => :artist
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_artist
      @artist = Artist.find(params[:id])
    end
end