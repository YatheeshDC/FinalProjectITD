// import React, { useEffect, useState } from "react";


// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);

//   const fetchInfo = async () => { 
//     try {
//       const response = await fetch('http://localhost:3002/allproducts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);
  

//   return (
//     <div>
//       {/* <h1>All Products List</h1> */}
//     <h1>Owner Details</h1>
//       <div>
//         <hr />
//         {allProducts.map((product) => (
//           <div key={product._id}>
//             <div>
//             <img src={`http://localhost:3002/${product.image}`} alt="" style={{ width: "150px", height:"200px" }} />
//               <p cartitems-product-title>{product.name}</p>
//               <p>{product.price}</p>
//               <p>{product.sqft}</p>
//               <p>{product.address}</p>
//               {/* Add remove functionality if needed */}
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>



// )}


// export default ListProduct;



// import React, { useEffect, useState } from "react";
// import { Card, Col, Row } from 'react-bootstrap';

// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);

//   const fetchInfo = async () => { 
//     try {
//       const response = await fetch('http://localhost:3002/allproducts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   return (
//     <div>
//       <h1>Owner Details</h1>
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {allProducts.map((product) => (
//           <Col key={product._id}>
//             <Card>
//               <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "150px", height:"200px" }} />
//               <Card.Body>
//                 <Card.Title><b>ownerName:</b>{product.name}</Card.Title>
//                 <Card.Text>
//                 <p><b>Email:</b>{product.email}</p>
//                 <p><b>Number:</b>{product.number}</p>
//                 <p><b>Flat:</b>{product.flat}</p>
//                   <p><b>Price:</b>{product.price}</p>
//                   <p><b>SquareFeet:</b>{product.sqft}</p>
//                   <p><b>Address:</b>{product.address}</p>
//                 </Card.Text>
//               </Card.Body>

//               <button className="btn btn-danger">Owner details</button>
//             </Card>

//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default ListProduct;




// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Modal, Button, Container } from 'react-bootstrap';

// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const fetchInfo = async () => { 
//     try {
//       const response = await fetch('http://localhost:3002/allproducts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleOwnerDetailsClick = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <Container style={{marginTop:'4rem', marginBottom:'4rem'}}>
//       <h2>Recently Posted</h2>
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {allProducts.map((product) => (
//           <Col key={product._id}>
//             <Card>
//               <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height:"200px" }} />
//               <Card.Body>
//                 <Card.Text>
//                   <p><b>Address:</b>{product.address}</p>
//                 </Card.Text>
//               </Card.Body>
//               <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       </Container>
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Owner Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <div>
//               <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height:"200px" }} />

//               <p><b>Owner Name:</b> {selectedProduct.name}</p>
//               <p><b>Email:</b> {selectedProduct.email}</p>
//               <p><b>Number:</b> {selectedProduct.number}</p>
//               <p><b>Flat:</b> {selectedProduct.flat}</p>
//               <p><b>Price:</b> {selectedProduct.price}</p>
//               <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
//               <p><b>Address:</b> {selectedProduct.address}</p>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ListProduct;

import React, { useEffect, useState } from "react";
import { Card, Col, Row, Modal, Button, Container } from 'react-bootstrap';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
// import axios from 'axios';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const fetchInfo = async () => { 
    try {
      const response = await fetch('http://localhost:3002/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleOwnerDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % allProducts.length);
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + allProducts.length) % allProducts.length);
  };

  const visibleProducts = allProducts.concat(allProducts).slice(startIndex, startIndex + cardsToShow);

  // const addToCart = (property, userName) => {
  //   const currentCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
  //   currentCart.push(property);
  //   localStorage.setItem("cartItems", JSON.stringify(currentCart));

  //   axios.post('http://localhost:3002/api/cart', {
  //     userName,
  //     items: [property]
  //   })
  //     .then(response => {
  //       console.log('Cart updated:', response.data);
  //       alert("Property added to cart");
  //     })
  //     .catch(error => {
  //       console.error('Failed to update cart:', error);
  //       alert("Something went wrong");
  //     });
  // };


  return (
    <div>
      <Container style={{marginTop:'4rem', marginBottom:'4rem'}}>
      <h2>Recently Posted</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {visibleProducts.map((product, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height:"200px" }} />
              <Card.Body>
                <Card.Text>
                  <p><b>Address:</b>{product.address}</p>
                </Card.Text>
              </Card.Body>
              <span style={{marginBottom:'1rem'}}>
              <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}style={{marginLeft:'2rem', marginRight:'2rem'}}>Owner details</Button>
              <Button variant="danger" 
              // onClick={() => addToCart(product)}
              >Add to wishlist</Button>
              </span>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
      <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '220%', borderRadius: '40px', height: '40px' }} onClick={handlePrev}>
        <KeyboardDoubleArrowLeftOutlinedIcon />
      </button>
      <button className='ArrowButton' style={{ position: 'absolute', right: '90px', top: '220%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
        <KeyboardDoubleArrowRightOutlinedIcon />
      </button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height:"200px" }} />

              <p><b>Owner Name:</b> {selectedProduct.name}</p>
              <p><b>Email:</b> {selectedProduct.email}</p>
              <p><b>Number:</b> {selectedProduct.number}</p>
              <p><b>Flat:</b> {selectedProduct.flat}</p>
              <p><b>Price:</b> {selectedProduct.price}</p>
              <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
              <p><b>Address:</b> {selectedProduct.address}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ListProduct;