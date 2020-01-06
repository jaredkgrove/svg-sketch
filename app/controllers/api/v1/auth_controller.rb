require 'pry'
class AuthController < ApplicationController

    def create
        binding.pry
        @user = User.find_by(email: user_login_params[:email])
        if @user && @user.authenticate(user_login_params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, jwt: token}, status: :accepted
        else
            render json: {errors: 'Invalid email or password'}, status: :unauthorized
        end
    end

    private
    def user_login_params
       params.require(:user).permit(:username, :password)
    end
end
