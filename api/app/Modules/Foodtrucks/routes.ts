import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/me', 'Foodtrucks.me').middleware('auth')
    Route.post('/create', 'Foodtrucks.create')
  }).prefix('/foodtrucks')

  Route.group(() => {
    Route.post('/login', 'Auth.login')
    Route.get('/logout', 'Auth.logout').middleware('auth')
  }).prefix('/auth')
}).namespace('App/Modules/Foodtrucks/Controllers')
