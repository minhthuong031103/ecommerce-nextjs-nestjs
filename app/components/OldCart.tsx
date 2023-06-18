'use client';
import { openCart } from '@/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';

export default function Cart() {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.cartOpen);
  const [show, setShow] = useState(false);
  const handleClose = () => dispatch(openCart(!isCartOpen));

  const cartOpen = useAppSelector((state) => state.cart.cartOpen);
  return (
    <div>
      <Offcanvas show={cartOpen} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
