'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventariosSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.integer('quantity', 100).notNullable()
      table.float('price', 100).notNullable()
      table.float('tax', 100).notNullable()

      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventariosSchema
