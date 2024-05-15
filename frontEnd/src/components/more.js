// import { React } from "react";
// import {Container, Card} from "react-bootstrap";
// // import BedIcon from '@mui/icons-material/Bed';
// // import BathtubIcon from '@mui/icons-material/Bathtub';
// // import BalconyIcon from '@mui/icons-material/Balcony';
// // import CastleIcon from '@mui/icons-material/Castle';
// const More = () => {
//     return (
//         <div>
//             <Container className="mx-3 mt-3" style={{width: '30rem', height:'30rem', marginBottom:'10rem'}}>
//                 <Card>
//                     <h5 style={{display:'flex', justifyContent:'center', marginTop:'1rem'}}><b>₹2.0 lac</b> &nbsp;See other charges</h5>
//                     <h6 style={{display:'flex', justifyContent:'center', marginLeft:'3rem', marginRight:'3rem'}}>4 BHK 4000 Sq-ft For Rent in in Sector 2 HSR Layout, Bangalore.</h6>
//                     <Card.Body>
//                         <div>
                            
//                             <Card.Img className="images" src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/13/Photo_h300_w450/66533429_5_PropertyImage152-86800389475064_300_450.jpg" />
                        
//                             {/* <span className="iconDetails">
//                                 <span className="mx-2"><BedIcon></BedIcon>4 BEDS</span>||
//                                 <span className="mx-2"><BathtubIcon></BathtubIcon>6 Baths</span>||
//                                 <span className="mx-2"><BalconyIcon></BalconyIcon>5 Balconies</span>||
//                                 <span className="mx-2"><CastleIcon></CastleIcon>Semi</span>
//                             </span> */}
//                             <span>
//                             <p className="carpetArea">
//                                 Carpet Area<br />
//                                 <b>4500</b><br />
//                                 sqft<br />
//                                 ₹44/sqft<br />
//                             </p>
//                             <p className="floor">
//                                 Floor<br />
//                                 <b>2 (Out of 4 Floors)</b>
//                             </p>
//                             <p className="status">
//                                 Status<br />
//                                 <b>Immediately</b>
//                             </p>
//                             <p className="facing">
//                                 Facing<br />
//                                 <b>North</b>
//                             </p>
//                             <p className="lifts">
//                                 Lifts<br />
//                                 <b>2</b>
//                             </p>
//                             <p className="furnish">
//                                 Furnished Status<br />
//                                 <b>Semi-Furnished</b>
//                             </p>
//                             <p className="period">
//                                 Age Of Construction<br />
//                                 <b>Less than 5 years</b>
//                             </p>
//                             </span>
//                             <div className="liner"></div>
//                         </div>
//                         <p>
//                             <Card.Img className="images22" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/16/Photo_h300_w450/71422397_6_2AE5A8A777F4781B4AB22C6B758506A_300_450.jpeg" />
//                             <Card.Img className="images33" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/10/Photo_h300_w450/72215495_5_PropertyImage899-8178761013603_300_450.jpg" />
//                             <Card.Img className="images33" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/16/Photo_h300_w450/72269989_1_PropertyImage1713233792463_300_450.jpg" />
//                         </p>
//                         <button className="owner me-4">Contact Agent</button>
//                         <button className="owner22">Get Ph.no</button>
//                         {/* <span className="owner33"><PersonIcon></PersonIcon>
//                          Last contact made 27 days ago</span> */}
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </div>
//     );
// }

// export default More;


 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link ,Box} from '@mui/material';
import {Row,Col ,Button,Badge} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import DoorSlidingOutlinedIcon from '@mui/icons-material/DoorSlidingOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MoreDetails from './more_detail';

export default function More() {
  return (
    < >
     


<Row>
  <Col>
    <Card sx={{ maxWidth: 1000 ,marginLeft:4,marginTop:5,border:'1px solid lightgray'}}>
         <CardContent>
        <Typography gutterBottom variant="h5" component="span">
        <CurrencyRupeeIcon sx={{fontSize:'25px'}}/> 57.0 Lac
        </Typography>
        <Typography gutterBottom variant="body1" component="span" sx={{marginLeft:3,color:'black'}}>
        <Link href="#" style={{color:"black"}}>EMI-26k</Link>
        </Typography>
        <Typography gutterBottom variant="body1" component="span" sx={{marginLeft:3,color:'black'}}>
        <Link href="#" style={{color:"black"}}>Need Home Loan? Check Eligibility</Link>
        </Typography>
         
        <Typography variant="body1" color="text.secondary" >
        1 BHK Flat For Sale in Shoba Acres,
        <Link href="#" style={{color:"black",fontWeight:'bold'}}> Whitefield, Bangalore</Link>
        </Typography>
     
      </CardContent>
      <Row>
        <Col>
      <CardMedia
        sx={{ height: 200,width:350 ,marginLeft:4,borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_4_PropertyImage703-221524176758_300_450.jpg"
        
      />
       <Box sx={{ display: 'flex'  }}>
       <CardMedia
        sx={{ height: 100,width:113 ,marginLeft:4,marginTop:1,borderBottomLeftRadius:'10px' }}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_1_PropertyImage398-9053029465217_300_450.jpg"
        
      />

       <CardMedia 
        sx={{ height: 100,width:111 ,marginLeft:1, marginTop:1 }}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_2_PropertyImage96-34146489432649_300_450.jpg"
        
      />
      
       <CardMedia
        sx={{ height: 100,width:113 ,marginLeft:1,marginTop:1,borderBottomRightRadius:'10px' }}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_1_PropertyImage398-9053029465217_300_450.jpg"
        
      />
    
      </Box>
      </Col>
       <Col >
      <Typography gutterBottom variant="body1" component="span" sx={{ color:"text.secondary",bgcolor:'lightgray',borderRadius:'10px'}}  className='py-4 , px-4'>
     <BedOutlinedIcon/> 1Bed |  <BathtubOutlinedIcon/>1Bath |  <BalconyOutlinedIcon/>1 Balcony <DoorSlidingOutlinedIcon/>1 Furnished
        </Typography>
        <Row>
            <Col>
        <Typography variant="body1" color="text.secondary" className='mt-5' >
         Carpet Area
         <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic" style={{fontWeight:'bold'}}>
       550sqft
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">sqft</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> sqyrd</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> sqm</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> acre</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> bigh</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> gunta</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> kanal</Dropdown.Item>

        </Dropdown.Menu> 
        </Dropdown>
           <CurrencyRupeeIcon sx={{fontSize:'16px'}}/>1200/sqft
        </Typography>


        <Typography  variant="body1" color="text.secondary" className='mt-3'>
            Floor
            
        </Typography>
        <Typography fontWeight='bold' variant='p'>3(Out Of 14 Floors)</Typography>

        <Typography  variant="body1" color="text.secondary" className='mt-3'>
            Facing
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> South</Typography>





        </Col>
        <Col>
        <Typography variant="body1" color="text.secondary" className='mt-5' >
         Developer
         </Typography>
         <Typography>
        <Link href="#" style={{color:"black",fontWeight:'bold'}}>SHOBA Ltd.</Link>
        </Typography>

        <Typography  variant="body1" color="text.secondary" className='mt-5'>
             Transaction Type
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> Rescale</Typography>


        <Typography  variant="body1" color="text.secondary" className='mt-3'>
            Furnished Status
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> Semi-Furnished</Typography>
        </Col>
        <Col>
        <Typography variant="body1" color="text.secondary" className='mt-5' >
          Project <br/>
        <Link href="#" style={{color:"black",fontWeight:'bold'}}>Shoba Acres</Link>

        </Typography>
        <br/>
        <Typography  variant="body1" color="text.secondary" className='mt-3'>
              Status
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> Ready To Move</Typography>

        <Typography  variant="body1" color="text.secondary" className='mt-3'>
        Type Of Ownership
            
        </Typography>
        <Typography fontWeight='bold' variant='p'>Co-operative Society</Typography>



        </Col>
        </Row>
        </Col>
         </Row>
        
        
      <hr></hr>
     
      <CardActions>
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" style={{borderRadius:'30px' }}>  Contact Owner </button>
<div class="modal fade " id="exampleModal"
 tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
 
  <div class="modal-dialog modal-dialog-centered " 
  style={{maxWidth:'400px'}} >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 mt-2" id="exampleModalLabel"> 
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <Typography variant="p" component="div" fontWeight="bold"
          className='px-3'
               style={{border:'1px solid yellow',
               borderRadius:'10px',
               height:'4rem',
               color:'maroon',
               backgroundColor:'antiquewhite'}}>
                
                  Enter your <WhatsAppIcon style={{color:'green'}}/> WhatsApp No. to get Contact Details of the Owner
            </Typography></h1>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"> Your Name</label>
            <input type="text" class="form-control" id="recipient-name"
            style={{border:'none',borderBottom:'1px solid #ccc',borderRadius:'0px'}}
            />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label"> email</label>
            <input type="email" class="form-control" id="recipient-email"
            style={{border:'none',borderBottom:'1px solid #ccc',borderRadius:'0px'}}
            />

          </div>
          <div class="mb-3">
            <label for="recipient-number" class="col-form-label">  Your whattsApp Number</label>
            <input type="tel" class="form-control" id="recipient-number"
            style={{border:'none',borderBottom:'1px solid #ccc',borderRadius:'0px'}}
            />
          </div>
        </form>
      </div>
      {/* <div class="modal-footer"> */}
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" class="btn btn-primary">Send message</button> */}
 <p style={{color:'gray',fontSize:'14px',marginLeft:'20px'}}>I Agree to MagicBricks' <span><a href='https://property.magicbricks.com/terms/terms.html'style={{color:"gray"}}>Terms of Use</a></span></p>
<button type="button" class="btn btn-danger d-flex justify-content-center m-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" style={{borderColor:'red',borderRadius:'30px'  }}>  Continue </button>

      {/* </div> */}
    </div>
  </div>
</div>

        {/* <Button  variant='danger' style={{borderRadius:'30px'}}>Contact Owner</Button> */}
        <Button  variant='light' style={{borderColor:'red',borderRadius:'30px'}}>
            Book Visit     <Badge bg="warning" text="dark" className="rounded-white-bg mx-2">FREE Cab</Badge>
</Button>
<Typography style={{ marginLeft:'22rem'}}>
    <PermContactCalendarIcon style={{color:'skyblue' }}/>
    Last Contact Made 6 days ago
</Typography>
      </CardActions>
    </Card>
    </Col>
    <Col  md={3} className='ml-auto mx-auto mt-5 '>
    <Card className='py-4'  sx={{border:'2px solid lightgray', position: 'sticky',  top: 100 }} >
            <Typography variant='h6' ml={3} className='d-block'>Contact Owner
            </Typography>
            <Typography className='d-flex' ml={3} variant='h6'>lucky group 
            
            <Typography gutterBottom variant="body1" mt={1} ml={1}>  +91-74xxxxxx </Typography> 
            </Typography>

        <Button  variant='danger' style={{borderColor:'red',borderRadius:'30px',marginLeft:'20px',display:'flex  justify-content-center',width:'80%'}}  >
            Book Visit     <Badge bg="warning" text="dark" className="rounded-white-bg mx-2 ">FREE Cab</Badge>
</Button>
          
            
         

        </Card>

        <Card className='py-4 mt-3' sx={{border:'2px solid lightgray' }} >
            <Typography variant='h6' ml={3} className='d-block'> <SimCardDownloadOutlinedIcon style={{color:'red'}}/> Document Brochure
            </Typography>
        </Card> 
    </Col>
    </Row>
  
</>
    
  );
}


 

 