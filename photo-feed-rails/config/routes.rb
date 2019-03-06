Rails.application.routes.draw do
  
  namespace :api do
    resources :users, only: [:create]
    resources :artists, only: [:show]
    post 'user_token' => 'user_token#create'
    post '/login' => 'sessions#create'
    post '/find_user_with_token' => 'users#findWithToken'

    get '/pics' => 'pics#index'
    post '/artist_pics' => 'pics#artist_pics'



    post 'find_user' => 'users#find'
 
    post '/add_pic_to_user' => 'users#addPicToUser'
    post '/remove_pic_from_user' => 'users#removePicFromUser'
 
  end
end
