import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Space from 'App/Models/Space'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await Space.createMany(
      [0x1111011, 0x1111111, 0x1111111, 0x1111111, 0x1111111, 0x1111111, 0x1111111].map((days) => ({
        days,
      }))
    )
  }
}
