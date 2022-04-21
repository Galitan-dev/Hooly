import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'Spaces'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id', { primaryKey: true })
      table.integer('days')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
