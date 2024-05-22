


// import React, { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
// import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
// import { Link } from 'react-router-dom';

// function ArrowAction(totalCards) {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     setIndex(prevIndex => (prevIndex + 1) % totalCards);
//   };

//   const handlePrev = () => {
//     setIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
//   };

//   return { index, handleNext, handlePrev };
// }

// function Property() {
//   const cards = [
//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Krishnarajapura, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/04/Photo_h180_w240/70303735_8_PropertyImage170-56177385649784_180_240.jpg",
//       subtitle: "2 BHK Flat",
//       price: "₹45,000 | 1207 sqft",
//       location: "Hulimaavu, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/29/Photo_h180_w240/72074739_10_f22df317c8746eda7d323cdf71db022_180_240.jpeg",
//       subtitle: "2 BHK Flat",
//       price: "₹50,000 | 1578 sqft",
//       location: "Kaikondrahalli, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpghttps://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹60,000 | 1824 sqft",
//       location: "Hebbal Kempapura, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/05/Photo_h180_w240/70312683_2_RWBEDROOM02_180_240.JPG",
//       subtitle: "2 BHK Flat",
//       price: "₹45,000 | 1578 sqft",
//       location: "Yerthiganahalli Devanahalli, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/09/Photo_h180_w240/70312925_1_PropertyImage1702124171328_180_240.jpg",
//       subtitle: "4 BHK Flat",
//       price: "₹65,000 | 1578 sqft",
//       location: "Whitefield, Bangalore",
//       link: "#",
//     },
//     // Other card objects...
//   ];
//   const { index, handleNext, handlePrev } = ArrowAction(cards.length);

//   // Define the array of indices representing the positions of the cards
//   const cardPositions = [0, 1, 2, 3];

//   return (
//     <div>
//       <Container className='insideCont'>
//         <Row>
//           <h2>Popular Owner Properties</h2>
//           {cardPositions.map(position => (
//             <Col key={position}>
//               <Card className='propertyCards' style={{ display: 'block' }}>
//                 {/* Use the index to dynamically change the content of the cards */}
//                 <Card.Img variant="top" src={cards[(index + position) % cards.length].imgUrl} height={'170rem'} />
//                 <Card.Body>
//                   <Card.Subtitle className="mb-2 text-muted">{cards[(index + position) % cards.length].subtitle}</Card.Subtitle>
//                   <Card.Title>{cards[(index + position) % cards.length].price}</Card.Title>
//                   <Card.Text>
//                     {cards[(index + position) % cards.length].location}
//                   </Card.Text>
//               <Link to="/more"> 
//               <Card.Link href={cards[(index + position) % cards.length].link}>Ready to move</Card.Link>
//               </Link> 
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//         <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '155%', borderRadius:'40px', height:'40px' }} onClick={handlePrev}>
//           <KeyboardDoubleArrowLeftOutlinedIcon />
//         </button>
//         <button className='ArrowButton' style={{ position: 'absolute', right: '135px', top: '155%', borderRadius:'20px', height:'40px' }} onClick={handleNext}>
//           <KeyboardDoubleArrowRightOutlinedIcon />
//         </button>
//       </Container>
//     </div>
//   );
// }

// export default Property;

///////
// import React, { useState  } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Typography, CardContent, CardMedia, CardActionArea, CardActions} from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import axios from 'axios';
// import usePagination from '../actions/pagi';
// function Property() {
//     const [hoverIndex, setHoverIndex] = useState(-1);
//     const cardsToShow = 4;
//     const cards =  [
//         {
//                 title: "3 BHK Flat",
//                 price: "₹15,000",
//                 size: "1000 sqft",
//                 location: "Chandapura, Bangalore",
//                image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
//                 // image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
//             readytomove: "Ready to move"
//         },
//         {
//             title: "3 BHK Flat",
//             price: "84 Lac",
//             size: "1150 sqft",
//             location: "Sahakar Nagar, Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
//             readytomove: "Under Construction"
//         },
//         {
//             title: "3 BHK Flat",
//             price: "1.26cr",
//             size: "1149 sqft",
//             location: "Whitefield Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
//             readytomove: "Under Construction"
//         },
//         {
//             title: "2 BHK Flat",
//             price: "1.18cr",
//             size: "1140 sqft",
//             location: "Phase 1 Electronics City, Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
//             readytomove: "Under Construction"
//         },
//         {
//             title: "2 BHK Flat",
//             price: "1.40cr",
//             size: "1918 sqft",
//             location: "Whitefield Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
//             readytomove: "Under Construction"
//         },
//         {
//               title: "2 BHK Flat",
//               price: "₹15,000",
//               size: "1000 sqft",
//               location: "Chandapura, Bangalore",
//               image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
//               readytomove: "Ready to move",
//             }
        
//     ];
//     const { index, handleNext, handlePrev } = usePagination(cards.length, cardsToShow);  // Assuming a custom hook for pagination
   
//     const addToCart = (property,userName) => {
//         const currentCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
//         currentCart.push(property);
//         localStorage.setItem("cartItems", JSON.stringify(currentCart));
    
//         // const userId = localStorage.getItem("id");
//         axios.post('http://localhost:3002/api/cart', {
//             userName, 
//             items: [property]
//         })
//         .then(response => {
//             console.log('Cart updated:', response.data);
//             alert("Property added to cart");
//         })
//         .catch(error => {
//             console.error('Failed to update cart:', error);
//             alert("Something went wrong");
//         });
//     };
//     return (
//         <Container fluid className='mt-5 fresh-properties'>
//             <Typography variant='h4' component="h1" className='header'>
//                 Fresh Properties in Bangalore
//             </Typography>
//             <Row className='property-grid'>
//                 {cards.slice(index, index + cardsToShow).map((card, cardIndex) => (
                 
//                     <Col key={cardIndex} md={3}>
//     <Card sx={{ maxWidth: 645 }} onMouseEnter={() => setHoverIndex(cardIndex)}
//           onMouseLeave={() => setHoverIndex(-1)}>
//         <CardActionArea>
//             <CardMedia component="img" height="140" image={card.image} alt={`${card.title} image`} />
//             <CardContent>
//                 <Typography gutterBottom variant="h6">
//                     {card.title}
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                     <CurrencyRupeeIcon />
//                     <strong>{`${card.price} | ${card.size}`}</strong>
//                     <div>{card.location}</div>
//                     <div>{card.readytomove}</div>
//                 </Typography>
//             </CardContent>
//         </CardActionArea>
//         <CardActions>
//             {hoverIndex === cardIndex && (
//                 <>
//                      <Link to="/more">  <button className="ButtonStyle bg-danger" onClick={() => console.log('View Details clicked')}>
//                     View Details
//                 </button></Link>
//                     <button   className="ButtonStyle bg-danger"
//                             onClick={() => addToCart(card)}>
//                         Add to wishlist
//                     </button>
//                 </>
//             )}
//         </CardActions>
//     </Card>
// </Col>

//                 ))}
//             </Row>
//             <nav className='pagination-controls'>
//                 {/* {index > 0 && (
//                     <Button className='arrow-button prev' onClick={handlePrev}>
//                         <ArrowBackIcon />
//                     </Button>
//                 )}
//                 {index < cards.length - cardsToShow && (
//                     <Button className='arrow-button next' onClick={handleNext}>
//                         <ArrowForwardIcon />
//                     </Button>
//                 )} */}
//                   {index > 0 && (
//         <button className='ArrowButton2' onClick={handlePrev}>
//           <ArrowBackIcon />
//         </button>
//        )}
//       {index < cards.length - cardsToShow && (
//         <button className='ArrowButton1' onClick={handleNext}>
//           <ArrowForwardIcon />
//         </button>
//       )}
//             </nav>
//         </Container>
//     );
// }


// export default Property;

// import React, { useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Typography, CardContent, CardMedia, CardActionArea, CardActions} from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
// import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import axios from 'axios';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import usePagination from '../actions/pagi';


// function ArrowAction(totalCards) {
//     const [index, setIndex] = useState(0);
  
//     const handleNext = () => {
//       setIndex(prevIndex => (prevIndex + 1) % totalCards);
//     };
  
//     const handlePrev = () => {
//       setIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
//     };
  
//     return { index, handleNext, handlePrev };
//   }
  
// function Property() {
//     const cardsToShow = 4;
//     const cards =  [
        // {
        //                     title: "3 BHK Flat",
        //                     price: "₹15,000",
        //                     size: "1000 sqft",
        //                     location: "Chandapura, Bangalore",
        //                    image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
        //                     // image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
        //                 readytomove: "Ready to move"
        //             },
        //             {
        //                 title: "3 BHK Flat",
        //                 price: "84 Lac",
        //                 size: "1150 sqft",
        //                 location: "Sahakar Nagar, Bangalore",
        //                 image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
        //                 readytomove: "Under Construction"
        //             },
        //             {
        //                 title: "3 BHK Flat",
        //                 price: "1.26cr",
        //                 size: "1149 sqft",
        //                 location: "Whitefield Bangalore",
        //                 image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
        //                 readytomove: "Under Construction"
        //             },
        //             {
        //                 title: "2 BHK Flat",
        //                 price: "1.18cr",
        //                 size: "1140 sqft",
        //                 location: "Phase 1 Electronics City, Bangalore",
        //                 image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
        //                 readytomove: "Under Construction"
        //             },
        //             {
        //                 title: "2 BHK Flat",
        //                 price: "1.40cr",
        //                 size: "1918 sqft",
        //                 location: "Whitefield Bangalore",
        //                 image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
        //                 readytomove: "Under Construction"
        //             },
        //             {
        //                   title: "2 BHK Flat",
        //                   price: "₹15,000",
        //                   size: "1000 sqft",
        //                   location: "Chandapura, Bangalore",
        //                   image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
        //                   readytomove: "Ready to move",
        //                 }
//     ];

//     const { index, handleNext, handlePrev } = ArrowAction(cards.length);
//     const cardPositions = [0, 1, 2, 3];
//     // const { index, handleNext, handlePrev } = usePagination(cards.length, cardsToShow);

//     const addToCart = (property,userName) => {
//                 const currentCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
//                 currentCart.push(property);
//                 localStorage.setItem("cartItems", JSON.stringify(currentCart));
            
//                 // const userId = localStorage.getItem("id");
//                 axios.post('http://localhost:3002/api/cart', {
//                     userName, 
//                     items: [property]
//                 })
//                 .then(response => {
//                     console.log('Cart updated:', response.data);
//                     alert("Property added to cart");
//                 })
//                 .catch(error => {
//                     console.error('Failed to update cart:', error);
//                     alert("Something went wrong");
//                 });
//             };

//     return (
//         <Container className='mt-5 fresh-properties'>
//             <Typography variant='h4' component="h1" className='header'>
//                 Fresh Properties in Bangalore
//             </Typography>
//             <Row className='property-grid'>
//                 {cards.slice(index, index + cardsToShow).map((card, cardIndex) => (
//                     <Col key={cardIndex} md={3}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardActionArea>
//                                 <CardMedia
//                                     component="img"
//                                     height="140"
//                                     image={card.image}
//                                     alt={`${card.title} image`}
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h6">
//                                         {card.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <CurrencyRupeeIcon />
//                                         <strong>{`${card.price} | ${card.size}`}</strong>
//                                         <div>{card.location}</div>
//                                         <div>{card.readytomove}</div>
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Link to="/more">
//                                     <button className="ButtonStyle bg-danger">
//                                         View Details
//                                     </button>
//                                 </Link>
//                                 <button className="ButtonStyle bg-danger" onClick={() => addToCart(card)}>
//                                     Add to wishlist
//                                 </button>
//                             </CardActions>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//             {/* <nav className='pagination-controls'>
//                 {index > 0 && (
//                     <button className='ArrowButton2' onClick={handlePrev}>
//                         <ArrowBackIcon />
//                     </button>
//                 )}
//                 {index < cards.length - cardsToShow && (
//                     <button className='ArrowButton1' onClick={handleNext}>
//                         <ArrowForwardIcon />
//                     </button>
//                 )}
//             </nav> */}

// <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '155%', borderRadius:'40px', height:'40px' }} onClick={handlePrev}>
//           <KeyboardDoubleArrowLeftOutlinedIcon />
//         </button>
//         <button className='ArrowButton' style={{ position: 'absolute', right: '135px', top: '155%', borderRadius:'20px', height:'40px' }} onClick={handleNext}>
//           <KeyboardDoubleArrowRightOutlinedIcon />
//         </button>
//         </Container>
//     );
// }

// export default Property;

import React, { useState } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typography, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import axios from 'axios';

function ArrowAction(totalCards) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
  };

  return { startIndex, handleNext, handlePrev };
}

function Property() {
  const cardsToShow = 4;
  const cards = [
    {
      title: "3 BHK Flat",
      price: "₹15,000",
      size: "1000 sqft",
      location: "Chandapura, Bangalore",
     image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
      // image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
  readytomove: "Ready to move"
},
{
  title: "3 BHK Flat",
  price: "84 Lac",
  size: "1150 sqft",
  location: "Sahakar Nagar, Bangalore",
  image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
  readytomove: "Under Construction"
},
{
  title: "3 BHK Flat",
  price: "1.26cr",
  size: "1149 sqft",
  location: "Whitefield Bangalore",
  image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
  readytomove: "Under Construction"
},
{
  title: "2 BHK Flat",
  price: "1.18cr",
  size: "1140 sqft",
  location: "Phase 1 Electronics City, Bangalore",
  image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
  readytomove: "Under Construction"
},
{
  title: "2 BHK Flat",
  price: "1.40cr",
  size: "1918 sqft",
  location: "Whitefield Bangalore",
  image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
  readytomove: "Under Construction"
},
{
    title: "2 BHK Flat",
    price: "₹15,000",
    size: "1000 sqft",
    location: "Chandapura, Bangalore",
    image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
    readytomove: "Ready to move",
}
  ];

  const { startIndex, handleNext, handlePrev } = ArrowAction(cards.length);

  const visibleCards = cards.concat(cards).slice(startIndex, startIndex + cardsToShow);

  const addToCart = (property, userName) => {
    const currentCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    currentCart.push(property);
    localStorage.setItem("cartItems", JSON.stringify(currentCart));

    axios.post('http://localhost:3002/api/cart', {
      userName,
      items: [property]
    })
      .then(response => {
        console.log('Cart updated:', response.data);
        alert("Property added to cart");
      })
      .catch(error => {
        console.error('Failed to update cart:', error);
        alert("Something went wrong");
      });
  };

  return (
    <Container className='mt-5 fresh-properties'>
      <Typography variant='h4' component="h1" className='header'>
        Fresh Properties in Bangalore
      </Typography>
      <Row className='property-grid'>
        {visibleCards.map((card, cardIndex) => (
          <Col key={cardIndex} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={`${card.title} image`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <CurrencyRupeeIcon />
                    <strong>{`${card.price} | ${card.size}`}</strong>
                    <div>{card.location}</div>
                    <div>{card.readytomove}</div>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="card-actions">
                <Link to="/more">
                  <button className="action-button" onClick={() => console.log('View Details clicked')}>
                    View Details
                  </button>
                </Link>
                <button className="action-button" onClick={() => addToCart(card)}>
                  Add to wishlist
                </button>
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>
      <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '155%', borderRadius: '40px', height: '40px' }} onClick={handlePrev}>
        <KeyboardDoubleArrowLeftOutlinedIcon />
      </button>
      <button className='ArrowButton' style={{ position: 'absolute', right: '90px', top: '155%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
        <KeyboardDoubleArrowRightOutlinedIcon />
      </button>
    </Container>
  );
}

export default Property;

