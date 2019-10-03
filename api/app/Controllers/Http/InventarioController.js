'use strict'

const Inventario = use('App/Models/Inventario');

class InventarioController {

    async getInventario({ request, response, view }){
        let inventarios = Inventario.all();
        
        return response.json(inventarios);
    }


    async store({ request }) {
        const { quantity, price, tax, user_id, product_id } = request.all();

        const inventario = await Inventario.create({
            quantity,
            price,
            tax,
            user_id,
            product_id
        });

        return inventario;
    }

    async destroy({ params }) {
        const { id } = params;
        console.log("este es el paramas " + id);

        const inventario = await Inventario.find(id);

        await inventario.delete();

        return inventario;
    }

    async update({ params, request }) {
        const { id } = params;
        const inventario = await Inventario.find(id);

        inventario.quantity = request.input('quantity');
        inventario.price = request.input('price');
        inventario.tax = request.input('tax')

        await inventario.save();

        return inventario

    }


}

module.exports = InventarioController
