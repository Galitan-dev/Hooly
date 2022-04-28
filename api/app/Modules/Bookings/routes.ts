import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/:id?', 'Bookings.get')
  Route.post('/create', 'Bookings.create').middleware('auth')
  Route.get('/remove/:id', 'Bookings.remove').middleware('auth')
})
  .prefix('/bookings')
  .namespace('App/Modules/Bookings/Controllers')
