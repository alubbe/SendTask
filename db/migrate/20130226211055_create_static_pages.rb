class CreateStaticPages < ActiveRecord::Migration
  def change
    create_table :static_pages do |t|
      t.string :meta_description
      t.string :meta_title

      t.timestamps
    end
  end
end
