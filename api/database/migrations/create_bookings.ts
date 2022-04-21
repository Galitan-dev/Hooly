import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'Bookings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID', { primaryKey: true })
      table.integer('SpaceID')
      table.integer('FoodtruckID')
      table.date('Date')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
