class SubjectController < ApplicationController
  def index
    respond_with Subject.all
  end

  def show
    respond_with Subject.find(params[:id])
  end

  def create
    respond_with Subject.create(post_params)
  end

  private

  def post_params
    params.require(:subject).permit(:name)
  end
end
