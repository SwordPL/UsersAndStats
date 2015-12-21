class TaskController < ApplicationController
  def index
    respond_with Task.where(subject_id: params[:subject_id])
  end

  def show
    respond_with Task.find(params[:id])
  end
end
