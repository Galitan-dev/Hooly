import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'bookings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id', 4).primary()
      table.integer('spaceId', 4).notNullable()
      table.integer('foodtruckId', 4).notNullable()
      table.date('date').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
