import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/:id', 'Spaces.get')
  Route.get('/', 'Spaces.get')
})
  .prefix('/spaces')
  .namespace('App/Modules/Spaces/Controllers')
