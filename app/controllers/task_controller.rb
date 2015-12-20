class TaskController < ApplicationController
  def index
    respond_with Task.where(subject_id: params[:subject_id])
  end
end
