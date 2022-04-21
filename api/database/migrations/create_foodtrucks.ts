import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'foodtrucks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id', { primaryKey: true })
      table.string('name', 50)
      table.string('password', 50)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
