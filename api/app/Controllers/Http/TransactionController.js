'use strict'

const Transaction = use('App/Models/Transaction');

class TransactionController {

    async getTransaction({ request, response, view }){
        let transaction = await Transaction.all();
        
        return response.json(transaction);
    }


    async store ({ request }){
        const {inventario_id, type, quantity, description} = request.all();

        const transaction = await Transaction.create({
            inventario_id,
            type,
            quantity,
            description
        });

        return transaction;
    }

    async destroy({ params }) {
        const { id } = params;
        console.log("este es el paramas " + id);

        const transaction = await Transaction.find(id);

        await transaction.delete();

        return transaction;
    }

    async update({ params, request }) {
        const { id } = params;
        const transaction = await Transaction.find(id);

        transaction.type = request.input('type');
        transaction.quantity = request.input('quantity');
        transaction.description = request.input('description');

        await transaction.save();

        return transaction;
    }
}

module.exports = TransactionController
