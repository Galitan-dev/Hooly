import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public foodtruckId: number

  @column()
  public spaceshipId: number

  @column()
  public date: Date
}
