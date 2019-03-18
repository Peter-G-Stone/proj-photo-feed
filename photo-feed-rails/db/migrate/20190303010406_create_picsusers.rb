class CreatePicsusers < ActiveRecord::Migration[5.2]
    def change
        create_table :picsusers do |t|
          t.references :pic, index: true, foreign_key: true
          t.references :user, index: true, foreign_key: true
          
          t.timestamps
        end
    end
end
