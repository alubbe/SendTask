class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :todo
      t.datetime :createdat
      t.boolean :completed
      t.datetime :completedat

      t.timestamps
    end
  end
end
