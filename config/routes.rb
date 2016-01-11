Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  resources :subject, only: [:index, :show, :create] do
    resources :task, only: [:index]
  end

  resources :task, only: [:show, :create] do
    resources :solution, only: [:index]
  end

end
