Rails.application.routes.draw do
  
  resources :users
  namespace :api do
    namespace :v1 do
      post '/login', to: 'auth#create'
      resources :sketches do
        resources :elements
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
