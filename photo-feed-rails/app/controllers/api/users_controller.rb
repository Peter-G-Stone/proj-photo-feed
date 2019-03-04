class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:addPicToUser, :findWithToken]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  ########## implemented from https://medium.com/@christine_tran/part-1-create-react-app-rails-api-authentication-with-jwt-tokens-and-redux-e14c7e788989
  ####
  def find
    # @user = User.find_by(email: params[:user][:email])
    @user = current_user
    if @user
      render json: @user, :include => {:pics => {:only =>  :id}}
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end
  ####

  def addPicToUser
    user = current_user
    # user = current_user
    pic = Pic.find(params[:pic][:id])
    user.pics << pic
    user.save
    render json: user, :include => {:pics => {:only =>  :id}}
  end


  ####
  def findWithToken
    user = current_user
    render json: user, :include => {:pics => {:only =>  :id}} 
  end

  ####


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :username, :password, :admin)
    end

end
