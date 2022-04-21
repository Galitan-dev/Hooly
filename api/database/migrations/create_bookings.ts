import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'bookings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id', { primaryKey: true })
      table.integer('spaceId')
      table.integer('foodtruckId')
      table.date('date')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
