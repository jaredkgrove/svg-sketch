require 'pry'
class Api::V1::AuthController < ApplicationController

    def create
        @user = User.find_by(username: user_login_params[:username])
        if @user && @user.authenticate(user_login_params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, jwt: token}, status: :accepted
        else
            render json: {errors: 'Invalid username or password'}, status: :unauthorized
        end
    end

    def get_current_user
        binding.pry
        if logged_in?
            render json: current_user
        else
            render json: {errors: 'no current user'}, status: :unauthorized
        end
    end

    private
    def user_login_params
       params.require(:auth).permit(:username, :password)
    end
end
