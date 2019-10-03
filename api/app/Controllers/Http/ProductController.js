'use strict'
const Product = use('App/Models/Product')

class ProductController {
    
    async getProducts({ request, response, view }){
        let productos = Product.all();
        
        return response.json(productos);
    }

    async store ( {request} ){
        const {code, name, img_url, description} = request.all();

        const product = await Product.create({
            code,
            name,
            img_url,
            description
        });

        return product;
    }

    async destroy ( { params }){
        const { id } = params;
        console.log("este es el paramas " +  id);

        const producto = await Product.find(id);

        await producto.delete();
        
        return producto;
    }

    async update ( {params, request}){
        const { id } = params;
        const producto = await Product.find(id);

        producto.code  = request.input('code');
        producto.name  = request.input('name');
        producto.img_url = request.input('img_url');
        producto.description = request.input('description');
 
        await producto.save();

        return producto

    }

    async getAll(){
        const product = await Product.request.all()
    }
}

module.exports = ProductController
