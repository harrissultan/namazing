Rails.application.routes.draw do
  resources :users
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/users', to: 'users#index'
  delete '/userdelete', to: 'users#destroy'
  get '/namaz', to: 'namazs#index'
  post '/namaz', to: 'namazs#create'
  get '/api', to: 'api#api'
end
