class TaskController < ApplicationController
  def index
    respond_with Task.where(subject_id: params[:subject_id])
  end

  def show
    respond_with Task.find(params[:id])
  end

  def create
    task = Task.create(params)
    send_through_websocket(task)
    respond_with task
  end

private
  def post_params
    params.require(:task).permit(:title, :description)
  end

  def send_through_websocket(task)

  end
end
