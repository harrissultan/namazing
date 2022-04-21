class NamazsController < ApplicationController
    def index
        namaz = Namazs.all
        render json: namaz, status: :ok
    end
    def create
        namaz = Namazs.create(params.permit(:fajr, :dhuhr, :asr, :maghrib, :isha))
        params[:namaz_id] = namaz_id
        render json: namaz, status: :created
    end
end
