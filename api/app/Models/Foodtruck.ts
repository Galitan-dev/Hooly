import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Foodtruck extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public remember_me_token: string

  @beforeSave()
  public static async hashPassword(foodtruck: Foodtruck) {
    if (foodtruck.$dirty.password) {
      foodtruck.password = await Hash.make(foodtruck.password)
    }
  }

  @beforeSave()
  public static async generateId(foodtruck: Foodtruck) {
    if (!foodtruck.id) while (await this.find((foodtruck.id = Math.floor(Math.random() * 10000))));
  }
}
