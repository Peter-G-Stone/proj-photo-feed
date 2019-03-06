stateless components count:
  loginPage
  signupPage
  PicsList
  Navigation
  
  maybe should convert Pic
  --- just one more to hit req

  

Mon Mar4 8pm
  unsaving done
  artist page done - but its not restful so maybe refactor that.
  then css style
    remember to insert subtitle depending on active page
  then comments, likes 
  then users as artists/submitters <- this is a stretch goal I'd say>

Mon Mar4 3:47pm
  maintains logins now

  next: unsaving
  then css and styyyyllllleeee
  then artist pages
  then comments and likes



Mon Mar4 1:39pm

  saving pics all good
  next maintain login despite page refresh
  then unsaving
  then css and styyyyllllleeee
  then artist pages
  then comments and likes

Sun Mar3 11:50pm
  take note of how if you refresh it no longer knows that you're logged in. hmm
  currenlty on: handling json response when you save a pic is creating an error
    tho it is successfully saving the pic

Sun Mar3 12:15pm
  got join table babyyyy

Saturday Mar2 8:30PM
  still not getting join table pics_users right. jeez.


Saturday Mar2 7:18PM
  def need to redo association between users and pics to use a join table

Saturday Mar2 2:23PM
  add another feature dang it 
  haven't ensured that usernames are unique... checkout how validations on rails side would interact with json responses? - I imagine it would return a clear error message. maybe validate the email that way too dummy

Fri Mar1 7pm
  user auth should finally be good
      except maybe passwords not being checked for a match?
  next:
    user profile pages
    saving images to your page
    artist pages?
  

Thurs Feb 28 5pm
  remember to go back and make sure passwords match in form!
  debugging login:
    order of debuggers:  
      authenticate action, but before fetch request comes back it goes to
      history.push('/')
      then componentDidMount and fetchPics()
      then gets response from   the authenticate fetch request

    6:15pm: still stuck where logins are lagging behind where we are trying to fetchPics(). see what I can do to prevent this async chaos




Wed Feb 27 8pm
    got it switched to redux but weird bug where my pics aspect of state is getting another pics nested under it, see the return value of pics container
      this was cause I was calling my reducer pics when I brought it into rootReducer!

Wed Feb 27 3pm
    stuck on login
    should ignore it for now and start working other stuff
    where I left off?
        see the fetch from components/LoginPage
        uncomment line 2 authenticate_user from pics_controller
        https://medium.com/@nick.hartunian/knock-jwt-auth-for-rails-api-create-react-app-6765192e295a
    things I added?
        jwt and knock gems
        user_token_controller
        config/initializers/knock.rb
        this route:   post 'user_token' => 'user_token#create'



potenially useful sites:
  
  you were using this, enoch sent it
    https://medium.com/@nick.hartunian/knock-jwt-auth-for-rails-api-create-react-app-6765192e295a
  
  a different login ex you may wanna checkout   
    http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example

  knock gem
    https://github.com/nsarno/knock

  consuming apis from learn
    https://learn.co/tracks/online-software-engineering-full-time/rails-and-javascript/consuming-apis/working-with-apis

    
  see react components as routes  
    https://github.com/Peter-G-Stone/react-components-as-routes-lab-online-web-ft-092418/blob/master/src/containers/App.js




from enoch meeting
    for user authentication:
        rails doesn't have access to session when doing a single page app
        still use bcrypt
        look at lab with the github api for example of sending json req with headers
            instead of a session token you'll have 
                localStorage.setItem('token', '1234')
                localStorage.getItem('token')
                localStorage.removeItem('token')
        look at sinatra project for example of using bcrypt user

    start with landing page

    https://medium.com/@nick.hartunian/knock-jwt-auth-for-rails-api-create-react-app-6765192e295a


idea!
    user inputs a search term
    source cover images of projects from behances api
    user scrolls through cover images
    can 'save' them
    view saved
        see more images from project once saved?
    

    3 routes
            - home
            - my saved
            - view page for project with more of the images


    

what to write about:
  bring up this :  https://www.bhalash.com/archives/13544808137
  something about this : https://apidock.com/rails/ActiveRecord/Associations/CollectionProxy/delete
  
