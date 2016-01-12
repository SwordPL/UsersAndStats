class SolutionController < ApplicationController
  def index
    respond_with Solution.where(task_id: params[:task_id])
  end
end
