import React from 'react'

export default function Product(props){
	const {productItems} = props;
	return(

		<div>
			<img className="small" src={productItems.image}></img>
			<h3>{productItems.name}</h3>
			<h3>{productItems.price}</h3>
			<h3>Add to cart</h3>
		</div>
		)
}