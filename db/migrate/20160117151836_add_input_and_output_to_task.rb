class AddInputAndOutputToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :input, :string
    add_column :tasks, :output, :string
  end
end
