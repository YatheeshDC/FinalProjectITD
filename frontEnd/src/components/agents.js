import { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';



function OutlinedCard() {

  const [hover, setHover] =  useState(false);

  return (
    < >
    <Box onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
     
    <Container style={{marginTop:'30px'}}>
    <h2> MB Preferred Agents in Bangalore</h2>
    <Row> 
      <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCardAge'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/topagent/Profile-1-42810231_200_200.jpg" />
        <p style={{marginLeft:'10px'}}><span  className='FontColor'>MB Preferred</span> <br/><b>Krishna</b></p>

        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
                    <div  className='Bgclr2'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'35px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  2500+</p>
                  </div>
        </div> 


<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h2 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>43 </h2>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>10 </h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
 
      <Card.Body>
 
      </Card.Body>
    
    </Card>
    </Col> 
    <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCardAge'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px',height:'70px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/topagent/Profile-1-2130859_200_200.jpg" />
        <p style={{marginLeft:'10px'}}><span  className='FontColor'>MB Preferred</span> <br/><b>Benaka Raj</b></p>
        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
            <div  className='BgColorAge'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'35px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  2500+</p>
                  </div>
        </div> 


        {/* number of Properties */}







<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>2 </h3>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}> 6</h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
      <Card.Body>
 
      </Card.Body>
    </Card>
    </Col>


    <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCardAge'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px',height:'70px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/topagent/Profile-1-30858873_200_200.jpg" />
        <p style={{marginLeft:'10px'}}><span  className='FontColor'>MB Preferred</span> <br/><b>Meghanathan</b></p>

        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
                    <div  className='BgColorAge'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'35px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/16860383_NewDoorVenturesLogoBigSizeBLACK300x300_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  1500+</p>
                  </div>
        </div> 


        {/* number of Properties */}







<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}> 5 </h3>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>30 </h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
      <Card.Body>
 
      </Card.Body>
    </Card>
    </Col> 



    <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCardAge'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/topagent/Profile-1-1753767_200_200.jpg" />
        <p style={{marginLeft:'10px'}}><span  className='TextColor'>MB Preferred</span> <br/><b>Mahesh Alva</b></p>

        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
                    <div  className='BgColorAge'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'35px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  2500+</p>
                  </div>
        </div> 


        {/* number of Properties */}







<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h2 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}> 20</h2>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}> 5</h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
      <Card.Body>
 
      </Card.Body>
    </Card>
    </Col> 


   
    </Row>
    </Container>
    </Box>
    </>
  );
}

export default OutlinedCard;











 

