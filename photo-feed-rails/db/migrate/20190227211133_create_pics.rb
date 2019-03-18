class CreatePics < ActiveRecord::Migration[5.2]
  def change
    create_table :pics do |t|
      t.string :url
      t.integer :likes, :default => 0, :null => false
      t.belongs_to :artist, index: true
      t.timestamps
    end
  end
end
