class Api::PicsController < ApplicationController

    def show
        binding.pry
        render json: @artist, :include => :pics
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(name: params[:id])
    end
end