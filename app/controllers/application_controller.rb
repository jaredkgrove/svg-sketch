class ApplicationController < ActionController::API
    def fallback_index_html
        render :file => 'public/index.html'
      end
    # helpers do
        # def current_user
        #     User.first
        # end

        # def logged_in?
        #     current_user
        # end
    # end
end
