require "uri"
require "net/http"
    
class ApiController < ApplicationController

    # skip_before_action :authorize, only: [:api]

    def api
        url = URI("https://api.sunnah.com/v1/hadiths/random")
        
        https = Net::HTTP.new(url.host, url.port)
        https.use_ssl = true
        
        request = Net::HTTP::Get.new(url)
        request["x-api-key"] = "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk"
        
        response = https.request(request)
        JSON.parse(response.body)
        render json: response.body
    end
end
