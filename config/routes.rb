Rails.application.routes.draw do

  devise_for :users
  root "notes#index"

  resources :notes, only: [:index, :new, :create]

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
end
