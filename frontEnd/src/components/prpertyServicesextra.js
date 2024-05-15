  
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Typography } from '@mui/material';
// import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
// import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
// import Arrrowaction from './arrowActionextra';

// function PropertyServices() {
//   const cardsToShow = 4; // Number of cards to show at once
//   const cards = [
//     {
//       title: "Best Home Loan deals",
//       text: "Compare and Choose From 34+banks to get the best home loan deal",
//       img: "https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp"
//     },
//     {
//       title: "Home Interiors",
//       text: "Transform Your space with Our Trusted Decor Partners",
//       img: "https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-decor.jpg"
//     },
//     {
//       title: "Rental Agreement",
//       text: "Online agreement drafting and stamping with home delivery",
//       img: "https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp"
//     },
//     {
//       title: "Property Management",
//       text: "Manage your property with our comprehensive services",
//       img: "https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp"
//     },
//     {
//       title: "Legal Services",
//       text: "Get legal advice and support for property transactions",
//       img: "https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-decor.jpg"
//     },{
//       title: "Rental Agreement",
//       text: "Online agreement drafting and stamping with home delivery",
//       img: "https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp"
//     },
//     {
//       title: "Rental Agreement",
//       text: "Online agreement drafting and stamping with home delivery",
//       img: "https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp"
//     }
//   ];

   
//   const { index, handleNext, handlePrev } = Arrrowaction(cards.length, 4);

//   return (
//     <Container>
//       <Typography variant='p' style={{marginTop:'50px', fontSize:'35px'}} className='nav_boldB'>
//         Property And Services
//       </Typography>
//       <Row>
//         {cards.slice(index, index + cardsToShow).map((card, idx) => (
//           <Col key={idx} style={{marginTop:'10px'}}>
//             <Card style={{ width: '14rem', marginTop:'20px', height:'250px' }} className='CardHover'>
//               <Card.Img variant="top" src={card.img} className="hoverZoom" />
//               <Card.Body>
//                 <Card.Title>{card.title}</Card.Title>
//                 <Card.Text>{card.text}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       {index > 0 && (
//         <button  className='ArrowButton2' style={{ position: 'absolute', left: '90px',marginLeft: "0px", top: '200%',borderRadius:'40px',height:'40px'   }} onClick={handlePrev}>
//           <KeyboardDoubleArrowLeftOutlinedIcon />
//         </button>
//       )}
//       {index < cards.length - cardsToShow && (
//         <button  className='ArrowButton' style={{ position: 'absolute', right: '135px', top: '324%' ,borderRadius:'20px',height:'40px'}}  onClick={handleNext}>
//           <KeyboardDoubleArrowRightOutlinedIcon />
//         </button>
//       )}
//     </Container>
//   );
// }

// export default PropertyServices;


 
 













 