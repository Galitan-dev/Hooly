import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FoodtrucksSchema extends BaseSchema {
  protected tableName = 'foodtrucks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id', 4).primary()
      table.string('name', 50).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
