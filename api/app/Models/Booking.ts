import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public foodtruckId: number

  @column()
  public spaceshipId: number

  @column()
  public date: Date

  @beforeSave()
  public static async generateId(booking: Booking) {
    if (!booking.id) while (await this.find((booking.id = Math.floor(Math.random() * 10000))));
  }
}
