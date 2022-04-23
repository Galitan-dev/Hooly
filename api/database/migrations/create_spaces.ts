import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foodtrucks extends BaseSchema {
  protected tableName = 'spaces'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id', 4).primary()
      table.integer('days', 8).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
