// 'use client';
// import { openCart } from '@/redux/cartSlice';
// import { useAppDispatch, useAppSelector } from '@/redux/hook';
// import { openModal } from '@/redux/paymentModalSlice';
// import Link from 'next/link';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// export default function MyNavbar() {
//   const productsInCart = useAppSelector(
//     (state: any) => state.cart.productsInCart
//   );
//   //useAppSelector is a custom hook that we created in redux\hook.tsx,
//   // it is used to access the redux store, we can get the state of the store
//   const dispatch = useAppDispatch();

//   const isCartOpen = useAppSelector((state: any) => state.cart.cartOpen);
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand>
//           <Link href={'/'}>React-Bootstrap</Link>
//         </Navbar.Brand>

//         <Nav className="ml-auto">
//           <Nav.Link
//             onClick={() => {
//               dispatch(openCart(!isCartOpen));
//             }}
//           >
//             <i className="fas fa-shopping-cart"></i>Cart
//             <span className="bg-danger text-center text-white rounded-pill px-2 py-1 ml-2">
//               {productsInCart.reduce(
//                 (acc: any, product: any) => acc + product.quantity,
//                 0
//               )}
//             </span>
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }
