import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'Foodtrucks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID', { primaryKey: true })
      table.string('Name', 50)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
