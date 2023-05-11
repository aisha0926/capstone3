// <<<<<<< HEAD
// import React from 'react'
// import './ProductSlider.css';
// import {Button} from 'react-bootstrap';
// import {GrOverview} from 'react-icons/gr'
// import {Link} from 'react-router-dom';

// export default function Product(props) {
//     const {product,onAdd} = props;
//   return (
//     	<div className="box">
//         	<img className="small" src={product.image} alt={product.name} />
//         		<h4>{product.name}</h4>
//         			<div>${product.price}</div>
//         	<div>
//      		   	<Button className="button__view text-white" style={{
//                     fontSize: '12px'
//                 }}variant="warning" onClick={() =>
//      		   	onAdd(product)}>Add to Cart</Button>
//                 <a href='#'><GrOverview size={30}/></a>
//                 {/* <Link as={Link} to="/login">
//                     <GrOverview size={30}/>
//                  </Link>*/}
//      		</div>
//    		</div>

//   )
// }
// =======
// import React from "react";
// import "./Product.css";
// import { useStateValue } from "./StateProvider";

// function Product({ id, title, image, price, rating }) {
//   const [{ basket }, dispatch] = useStateValue();

//   console.log("This is the basket >>> ", basket);

//   const addToBasket = () => {
//     //dispatch the item into the data layer
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//       },
//     });
//   };
//   return (
//     <div className="product">
//       <div className="product__info">
//         <p>{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>⭐</p>
//             ))}
//         </div>
//       </div>
//       <img src={image} alt="" />
//       <button onclick={addToBasket}>Add to Cart</button>
//     </div>
//   );
// }

// export default Product;
// >>>>>>> d2f91cd5b318e1283a9c657a73fbb8984b5c8e26
