class AddDescriptionToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :descrption, :string
  end
end
