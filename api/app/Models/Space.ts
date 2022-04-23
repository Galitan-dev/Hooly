import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Space extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public days: number

  @beforeSave()
  public static async generateId(space: Space) {
    if (!space.id) while (await this.find((space.id = Math.floor(Math.random() * 10000))));
  }
}
