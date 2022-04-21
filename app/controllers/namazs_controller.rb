class NamazsController < ApplicationController
    def index
        namaz = Namazs.all
        render json: namaz, status: :ok
    end
    def create
        namaz = Namazs.create!(namazs_params)
        # params[:namaz] = namaz
        render json: namaz, status: :created
    end
 

    private

    def namazs_params
        params.permit(:fajr, :dhuhr, :asr, :maghrib, :isha)
    end
end
