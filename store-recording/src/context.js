import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();

//provider
//consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
    };
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];

        });
        this.setState(() => {
            return { products: tempProducts };
        });

    
    };
    handleDetail = () => {
        console.log('hello from detail');
    };
    addTocart = () => {
        console.log('hello from add to cart');
    };
    

    render() {
        return (
            <ProductContext.Provider 
            value={{

                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart

            }}
            >
                
                
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer };

