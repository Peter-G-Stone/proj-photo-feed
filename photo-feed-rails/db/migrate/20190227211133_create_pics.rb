class CreatePics < ActiveRecord::Migration[5.2]
  def change
    create_table :pics do |t|
      t.string :url
      t.belongs_to :artist, index: true
      t.belongs_to :user, index: true, required: false
      t.timestamps
    end
  end
end
