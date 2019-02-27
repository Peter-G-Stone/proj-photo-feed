class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            render json: user
        else
        render json: {
            error: 'Username or password incorrect'
            }, status: 404          
        end
    end

    # private
    # def session_params
    #     params.require(:session).permit(:username, :password)
    # end
end
