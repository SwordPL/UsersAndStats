class SolutionController < ApplicationController
  def index
    respond_with Solution.where(subject_id: params[:subject_id], task_id: params[:task_id])
  end
end
