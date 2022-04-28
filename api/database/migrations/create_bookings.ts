import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'bookings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id', 4).primary()
      table.integer('space_id', 4).notNullable()
      table.integer('foodtruck_id', 4).notNullable()
      table.date('date').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
