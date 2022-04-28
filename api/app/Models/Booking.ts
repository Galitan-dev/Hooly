import {
  afterFetch,
  afterFind,
  BaseModel,
  beforeFind,
  beforeSave,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // the fake factory does not support camelcase
  @column({ serializeAs: 'foodtruck_id' })
  public foodtruckId: number

  @column({ serializeAs: 'space_id' })
  public spaceId: number

  @column()
  public date: DateTime

  @beforeSave()
  public static async generateId(booking: Booking) {
    if (!booking.id) while (await this.find((booking.id = Math.floor(Math.random() * 10000))));
  }

  @afterFetch()
  public static async parseDateMany(bookings: Booking[]) {
    for (const booking of bookings) {
      this.parseDate(booking)
    }
  }

  @afterFind()
  public static async parseDate(booking: Booking) {
    if (!booking.date.toFormat) {
      console.log('hey')
      booking.date = DateTime.fromJSDate(<Date>(<unknown>booking.date))
    }
  }
}
