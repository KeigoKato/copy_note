Rails.application.routes.draw do

  devise_for :users
  root "notes#index"

  # resources :notes, only: [:index, :new, :create, :show, :destroy, :edit, :update]
  resources :notes, only: [:index, :new, :show, :destroy, :edit, :update]

  resources :notes do
    resources :deals, only: :create
    resources :reviews, only: :create
    resources :likes, only: [:create, :destroy]
  end

  resources :users, only: [:show, :edit, :update]

end
