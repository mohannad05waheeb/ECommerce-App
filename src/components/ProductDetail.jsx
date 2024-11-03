import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Products';  
const ProductDetail = () => { 
    const { id } = useParams();
    const product = products.find((prod) => prod.id === id);  
    if (!product) {
        return <h1 className='flex justify-center items-center text-2xl'>
              Product Not Found
            </h1>;  
    }
    return (
        <div className='flex items-center justify-center gap-10'>
            <div>
            <img src={product.imageUrl} alt={product.name} style={{ width: '300px' }} />  
            </div>
            <div>
            <h2 className='text-orange-500 uppercase'>{product.company}</h2>
            <h1 className='uppercase font-bold'>{product.name}</h1>
            <p className='max-w-96 opacity-70'>{product.description}</p>
            <p className='font-bold'>{product.price}</p>
            <s className='opacity-70'>{product.discount}</s>
            </div> 
        </div>
    );
};
export default ProductDetail;