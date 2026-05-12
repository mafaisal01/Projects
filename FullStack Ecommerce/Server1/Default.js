
import ProductSchema from './Model/ProdctSchema.js';
import { products } from './Constant/Product.js';



const DefaultData = async () => {
    try {
        await ProductSchema.deleteMany({});
        await ProductSchema.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;