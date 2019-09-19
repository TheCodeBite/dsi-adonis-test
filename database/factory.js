'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')

Factory.blueprint('App/Models/User', async (faker) => {
    return {
        username: faker.username(),
        email: faker.email(),
        rol: '1'
    }
});

Factory.blueprint('App/Models/Product', async (faker) => {
    return{
        name: faker.name(),
        description: faker.paragraph(),
        img_url: faker.avatar(protocol, 'https'),
        code: faker.cc()
    }
})
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
