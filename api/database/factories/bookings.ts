import Foodtruck from 'App/Models/Foodtruck'
import Booking from 'App/Models/Booking'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Space from 'App/Models/Space'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'

export default Factory.define(Booking, async ({ faker }) => {
  const [foodtruck] = await Foodtruck.query().orderBy(Database.raw('RANDOM()')).limit(1)
  const [space] = await Space.query().orderBy(Database.raw('RANDOM()')).limit(1)

  const booking = {
    id: faker.datatype.number(9999),
    foodtruckId: foodtruck.id,
    spaceId: space.id,
    date: DateTime.fromJSDate(faker.date.soon(30)),
  }

  return booking
}).build()
