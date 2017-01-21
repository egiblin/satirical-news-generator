Rails.application.routes.draw do
  resources :articles, only: [:index, :create]

  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :create]
    end
  end

end
