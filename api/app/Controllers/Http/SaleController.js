'use strict'

const Sale = use('App/Models/Sale')

class SaleController {
    async store({ request }) {
        const { quantity, discoont, total, status, pay_method, user_id, product_id } = request.all();

        const sale = await Sale.create({
            quantity,
            discoont,
            total,
            status,
            pay_method,
            user_id,
            product_id
        });

        return sale;
    }

    async destroy({ params }) {
        const { id } = params;
        console.log("este es el paramas " + id);

        const sale = await Sale.find(id);

        await sale.delete();

        return sale;
    }

    async update({ params, request }) {
        const { id } = params;
        const sale = await Sale.find(id);

        sale.quantity = request.input('quantity');
        sale.discoont = request.input('discoont');
        sale.total = request.input('total');
        sale.status = request.input('status');

        await sale.save();

        return sale
    }
}

module.exports = SaleController
