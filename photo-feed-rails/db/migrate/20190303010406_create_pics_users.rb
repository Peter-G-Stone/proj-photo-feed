class CreatePicsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :pics_users, :id => false do |t|
      t.references :pic_id
      t.references :user_id
    end
  end
end
