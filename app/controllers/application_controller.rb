require 'pry'
class ApplicationController < ActionController::API
    # def fallback_index_html
    #     render :file => 'public/index.html'
    #   end
    def encode_token(payload)
        JWT.encode(payload, ENV['JWT_TOKEN_SECRET'])
    end

    def current_user
        @current_user ||= User.find_by(id: decode_token_and_get_user_id)
    end

    def logged_in?
        !!current_user
    end

    def decode_token_and_get_user_id
        begin
            JWT.decode(request.headers["Authorization"], ENV['JWT_TOKEN_SECRET'])[0]["user_id"] 
        rescue JWT::DecodeError
            nil
        end
    end

end
