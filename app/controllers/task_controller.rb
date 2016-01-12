class TaskController < ApplicationController
  require 'json'

  def index
    respond_with Task.where(subject_id: params[:subject_id])
  end

  def show
    respond_with Task.find(params[:id])
  end

  def create
    task = Task.create(post_params)
    params['user_id'] = 1
    send_through_websocket(params.to_json)
    respond_with task
  end

private
  def post_params
    params.require(:task).permit(:title, :description, :subject_id)
  end

  def send_through_websocket(task)
    EM.run do
      ws = WebSocket::EventMachine::Client.connect(:uri => 'ws://localhost:8080')

      EventMachine.next_tick do
        ws.send task
        ws.close
      end

    end
  end
end
