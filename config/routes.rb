Rails.application.routes.draw do

  devise_for :users
  root "notes#index"

  resources :notes, only: [:index, :new, :create, :show, :destroy]

  resources :notes do
    resources :deals, only: :create
  end

  resources :users, only: [:show, :edit, :update]

end
