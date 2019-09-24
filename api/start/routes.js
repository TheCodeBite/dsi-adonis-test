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

Route.on('/').render('welcome')

app.get('/', function(req, res){
  res.redirect('/todo');
});

// RUTA DE USUARIO
Route.group(() => {
  Route.post('users/register', 'UserController.store');
}).prefix('api/v1/');

Route.group(() =>{
  Route.post('transaction/new', 'TransactionController.store');
  Route.delete('transaction/delete/:id', 'TransactionController.destroy');
  Route.put('transaction/edit/:id', 'TransactionController.update');
}).prefix('api/v1/');

Route.group(() =>{
  Route.post('product/register', 'ProductController.store');
  Route.delete('product/delete/:id', 'ProductController.destroy');
  Route.put('product/edit/:id', 'ProductController.update');
}).prefix('api/v1/');

Route.group(() => {
  Route.post('sale/new', 'SaleController.store');
  Route.delete('sale/delete/:id', 'SaleController.destroy');
  Route.put('sale/edit/:id', 'SaleController.update');
}).prefix('api/v1');

Route.group(() => {
  Route.post('inventario/new', 'InventarioController.store');
  Route.delete('inventario/delete/:id', 'InventarioController.destroy');
  Route.put('inventario/edit/:id', 'InventarioController.update');
}).prefix('api/v1/')