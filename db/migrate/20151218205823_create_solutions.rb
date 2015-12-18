class CreateSolutions < ActiveRecord::Migration
  def change
    create_table :solutions do |t|
      t.references :user, index: true, foreign_key: true
      t.references :task, index: true, foreign_key: true
      t.boolean :compilation_successful
      t.integer :execution_time
      t.integer :points

      t.timestamps null: false
    end
  end
end
