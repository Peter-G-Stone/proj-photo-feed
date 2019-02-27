Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users
  post '/login' => 'sessions#create'
  get '/pics' => 'pics#index'
end
