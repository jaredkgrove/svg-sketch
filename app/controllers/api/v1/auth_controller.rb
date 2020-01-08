require 'pry'
class Api::V1::AuthController < ApplicationController

    def create
        @user = User.find_by(username: user_login_params[:username])
        if @user && @user.authenticate(user_login_params[:password])
            token = encode_token({user_id: @user.id})
            user_json = UserSerializer.new(@user).serialized_json

            render json: {user: user_json, jwt: token}, status: :created
      
        else
            render json: {errors: 'Invalid username or password'}, status: :unauthorized
        end
    end

    def get_current_user
        # binding.pry
        if logged_in?
            user_json = UserSerializer.new(current_user).serialized_json
            render json: user_json, status: :ok
        else
            render json: {errors: 'no current user'}, status: :unauthorized
        end
    end

    private
    def user_login_params
       params.require(:auth).permit(:username, :password)
    end
end
