'use strict'

const Transaction = use('App/Models/Transaction');

class TransactionController {
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
}

module.exports = TransactionController
