import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'Spaces'

  public async up() {
    this.defer(async (db) => {
      await Promise.all(
        [0x1111111, 0x1111111, 0x1111111, 0x1111111, 0x1111011, 0x1111111, 0x1111111].map(
          (days) => {
            return db.table(this.tableName).insert({
              days,
            })
          }
        )
      )
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
