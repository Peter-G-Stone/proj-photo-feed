class SessionsController < ApplicationController
    def create
        user = User.find_by(name: params[:username])
        if user.authenticate(params[:password])
            binding.pry
        else
            binding.pry
        end
    end

    # private
    # def session_params
    #     params.require(:session).permit(:username, :password)
    # end
end
