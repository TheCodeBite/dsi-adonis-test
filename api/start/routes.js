'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');

// RUTA DE USUARIO
Route.group(() => {
  Route.get('users/', 'UserController.getUsers');
  Route.post('users/register', 'UserController.store');
  Route.post('users/login/', 'UserController.login')
}).prefix('api/v1/');

Route.group(() =>{
  Route.get('transaction/', 'TransactionController.getTransaction');
  Route.post('transaction/new', 'TransactionController.store');
  Route.delete('transaction/delete/:id', 'TransactionController.destroy');
  Route.put('transaction/edit/:id', 'TransactionController.update');
}).prefix('api/v1/');

Route.group(() =>{
  Route.get('product/', 'ProductController.getProducts');
  Route.post('product/register', 'ProductController.store');
  Route.delete('product/delete/:id', 'ProductController.destroy');
  Route.put('product/edit/:id', 'ProductController.update');
}).prefix('api/v1/');

Route.group(() => {
  Route.get('sale/', 'SaleController.getSale')
  Route.post('sale/new', 'SaleController.store');
  Route.delete('sale/delete/:id', 'SaleController.destroy');
  Route.put('sale/edit/:id', 'SaleController.update');
}).prefix('api/v1');

Route.group(() => {
  Route.get('inventario/', 'InventarioController.getInventario');
  Route.post('inventario/new', 'InventarioController.store');
  Route.delete('inventario/delete/:id', 'InventarioController.destroy');
  Route.put('inventario/edit/:id', 'InventarioController.update');
}).prefix('api/v1/')