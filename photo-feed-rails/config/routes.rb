Rails.application.routes.draw do
  
  namespace :api do
    resources :users
    post 'user_token' => 'user_token#create'
    post '/login' => 'sessions#create'
    get '/pics' => 'pics#index'
    post 'find_user' => 'users#find'
  end
end
