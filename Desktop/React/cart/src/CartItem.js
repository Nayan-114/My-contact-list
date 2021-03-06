import React from 'react'

class CartItem extends React.Component{  
    render(){
        console.log('this.props',this.props);
        const {price,title,qty} = this.props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct}=this.props;
        return (
            <div className ="cart-item">
                <div className ="left-block">
                    <img style={styles.image} />
                </div>
                <div className = "right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt="Increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1619193959~hmac=54e997988f986897aa1a4c777386876f" 
                        onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619193864~hmac=3b8b79161a161d32d32a7c62a31d2749" 
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1619194044~hmac=d1c78c9f44e6d772e6584c47a866502e" 
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}


export default CartItem;