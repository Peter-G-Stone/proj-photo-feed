class CreatePicsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :pics_users, :id => false do |t|
      t.integer :pic_id
      t.integer :user_id
    end
  end
end
