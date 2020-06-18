class CreateProjectsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :img
      t.string :github
      t.string :heroku
    end
  end
end
