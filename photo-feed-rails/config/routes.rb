Rails.application.routes.draw do
  
  namespace :api do
    resources :users
    post 'user_token' => 'user_token#create'
    post '/login' => 'sessions#create'
    get '/pics' => 'pics#index'
    post 'find_user' => 'users#find'
    post '/add_pic_to_user' => 'users#addPicToUser'
    post '/find_user_with_token' => 'users#findWithToken'
  end
end
