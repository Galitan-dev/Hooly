import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'Spaces'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID', { primaryKey: true })
      table.integer('Days')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
