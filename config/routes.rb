Rails.application.routes.draw do

  devise_for :users
  root "notes#index"

  resources :notes, only: [:index, :new, :create, :show]
  #heroku上でログアウトできなかったら以下を使う
  # devise_scope :user do
  #   get '/users/sign_out' => 'devise/sessions#destroy'
  # end
end
