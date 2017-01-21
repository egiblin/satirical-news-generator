class Api::V1::ArticlesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @articles = Article.all
    render json: @articles
  end

  def create
    data = JSON.parse(request.body.read)
   @article = Article.new(title: data["title"], image_url: data["image_url"], body: data["body"])
   if @article.save!
     @articles = Article.all
     @articles.order(:id)
     render json: @articles
   else
     render json: {message: "Did not work"}, status: 404
   end
 end
end
