class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    
    def index
      user = User.all
      render json: user, status: :ok
    end
  
  
    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def show
      user = User.find_by(id: session[:user_id])
      render json: user
    end

    # def destroy
    #   user = User.find_by(id: params[:id])
    #   user.destroy user_id:
    #   head :no_content
    # end
  
    private
  
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
  
  end