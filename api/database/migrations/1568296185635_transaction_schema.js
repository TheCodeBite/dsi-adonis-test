'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.integer('type', 3).notNullable()
      table.float('quantity',100).notNullable()
      table.string('description', 254).notNullable()
      table.integer('inventario_id').unsigned().references('id').inTable('inventarios')
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
