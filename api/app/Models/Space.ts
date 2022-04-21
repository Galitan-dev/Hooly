import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Space extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public days: number
}
