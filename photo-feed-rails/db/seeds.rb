

artistOne = Artist.create(name: 'fake artist one')
artistTwo = Artist.create(name: 'fake artist two')

picOne = Pic.create(url: 'https://i.imgur.com/iwjtkYQ.jpg', artist: artistOne)
picTwo = Pic.create(url: 'https://i.imgur.com/2m0O1sc.jpg', artist: artistOne)
picThree = Pic.create(url: 'https://i.imgur.com/9dkWxx4.jpg', artist: artistOne)
picFour = Pic.create(url: 'https://i.imgur.com/m0TEDou.jpg', artist: artistOne)
picFive = Pic.create(url: 'https://i.imgur.com/jeWMOYb.jpg', artist: artistOne)
picSix = Pic.create(url: 'https://i.imgur.com/lS394gz.jpg', artist: artistOne)
picSeven = Pic.create(url: 'https://i.imgur.com/0ofogca.jpg', artist: artistOne)
picEight = Pic.create(url: 'https://i.imgur.com/AuIIrue.jpg', artist: artistTwo)
picNine = Pic.create(url: 'https://i.imgur.com/sv0868K.jpg', artist: artistTwo)
picTen = Pic.create(url: 'https://i.imgur.com/Lx3V35q.jpg', artist: artistTwo)
picEleven = Pic.create(url: 'https://i.imgur.com/h47h2Li.jpg', artist: artistTwo)
picTwelve = Pic.create(url: 'https://i.imgur.com/PaIf0Cv.jpg', artist: artistTwo)
picThirteen = Pic.create(url: 'https://i.imgur.com/QWXMoV0.jpg', artist: artistTwo)
picFourteen = Pic.create(url: 'https://i.imgur.com/cHak7XF.jpg', artist: artistTwo)


# artistOne.pics << [picOne, picTwo, picThree, picFour, picFive, picSix, picSeven]

# artistOne.save

# artistTwo.pics << [picEight, picNine, picTen, picEleven, picTwelve, picThirteen, picFourteen]
# artistTwo.save

# (0..6).each do |i|
#     artistOne.pics << Pic.all[i]
# end
# (7..13).each do |i|
#     artistTwo.pics << Pic.all[i]
# end

peter = User.create(username: 'peter', email: 'pmail@gmail.com', password: 'password', admin: true)
annie = User.create(username: 'annie', email: 'amail@gmail.com', password: 'password')
sophie = User.create(username: 'sophie', email: 'smail@gmail.com', password: 'password')






