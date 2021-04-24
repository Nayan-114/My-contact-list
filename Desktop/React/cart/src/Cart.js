import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component{

    constructor(){
        super();
        this.state={
            products:[
                {
                    price:999,
                    title:'Watch',
                    qty:6,
                    img:'',
                    id:1
                },
                {
                    price:1599,
                    title:'MobilePhone',
                    qty:4,
                    img:'',
                    id:2
                },
                {
                    price:17999,
                    title:'Laptop',
                    qty:1,
                    img:'',
                    id:3
                },
                {
                    price:500,
                    title:'Cricket Bat',
                    qty:3,
                    img:'',
                    id:4
                },
                {
                    price:2000,
                    title:'TV',
                    qty:2,
                    img:'',
                    id:5
                },
                {
                    price:6000,
                    title:'AC',
                    qty:1,
                    img:'',
                    id:6
                },
                {
                    price:299,
                    title:'Perfumes',
                    qty:2,
                    img:'',
                    id:7
                },
                {
                    price:150,
                    title:'Mask',
                    qty:10,
                    img:'',
                    id:8
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return ( <CartItem 
                        product={product} 
                        key={product.id}
                        />)
                })}
                
            </div>
        );
    }
}

export default Cart;