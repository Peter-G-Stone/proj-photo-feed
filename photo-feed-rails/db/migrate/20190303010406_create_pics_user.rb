class CreatePicsUser < ActiveRecord::Migration[5.2]
    create_join_table :pics, :users

end
