'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {

    Users() {
        return this.hasMany('App/Models/Users')
    }

    Productos() {
        return this.hasMany('App/Models/Products')
    }

    Transaction() {
        return this.hasMany('App/Models/Transaction')
    }

}   

module.exports = Inventario
