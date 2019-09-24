'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.float('quantity',100).notNullable()
      table.float('discoont',100).notNullable()
      table.float('total', 100).notNullable()
      table.integer('status', 3).notNullable()
      table.integer('pay_method',2).notNullable()
      table.integer('user_id',3).notNullable()
      
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
