import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card, Carousel, Container, Row } from 'react-bootstrap';
import { CarouselItem} from 'react-bootstrap';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
// import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'antiquewhite',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Container className='realCont'>
             <h2>Your Real Estate Guide</h2>
      <Row>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12} className='mainColumn'>
        <Grid item xs={4}>
          <Item className='ColumnsGrid'>
            <h6><b>Locality Videos</b></h6><hr></hr>
            <Carousel style={{marginBottom:'21%'}}>
            <CarouselItem>
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/KdLZ0Wr3WqI?si=3wvSo6YKNNovrbxq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </span>&nbsp;&nbsp;
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/G9a2S0nCCb8?si=oma3jCPWzaanfX1r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </span><br></br><br></br>

            <span>
            <b> Locality Review -Hoodi, Bengaluru</b>
            </span>
            </CarouselItem>


            <CarouselItem>
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/_G9F7h3453o?si=tYE9jZVGsTNZzabv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </span>&nbsp;&nbsp;
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/Kq4q_lc5byQ?si=aEsXjUzdTaAR2WEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
            </span><br></br><br></br>

            <div>
            <b>Locality Review -Rammurthy Nagar, Bengaluru</b>
            </div>
            </CarouselItem>
            </Carousel>
            <hr></hr>
            <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'16px', display:'flex', justifyItems:'start', marginLeft:'1rem'}}><p> See All  <KeyboardDoubleArrowRightOutlinedIcon/></p> </Card.Link>
            </Item>
        </Grid>
      
        <Grid item xs={4}>
          <Item className='ColumnsGrid'>
          <h6><b>Industry Insights</b></h6><hr></hr>
            <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px',margin:'0px'}}><p> <PlayCircleOutlinedIcon/> <span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it?</span></p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <ReceiptLongOutlinedIcon/> <span style={{color:'black' }}> What is rent aggrement-rent aggrement sample?   </span> </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <InventoryOutlinedIcon/><span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it?</span>  </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <DifferenceOutlinedIcon/><span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it?</span>  </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <VideoLibraryOutlinedIcon/> <span style={{color:'black' }}>What is rent aggrement-rent aggrement sample?</span> </p></Card.Link><hr></hr>
               <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'16px', display:'flex', justifyItems:'start', marginLeft:'1rem'}}><p> See All  <KeyboardDoubleArrowRightOutlinedIcon/></p> </Card.Link>
            </Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item className='d-flex ColumnsGrid'>
          <div class="video-container">
        <div class="video">
            <iframe src="https://www.youtube.com/embed/0ihT_FqJ9YE?si=Bk-kxCuZrVvYmMwN" frameborder="0" allowfullscreen title='video'></iframe>
            <div class="info">
                {/* <h2>Video 1 Title</h2> */}
                <p> <b>Model Tenancy Act 2021: Protects the rights of landlords and tenants</b></p>
                <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'14px'}}><p> Watch Video  <KeyboardDoubleArrowRightOutlinedIcon/></p> </Card.Link>
            </div>
        </div>
       

        <div class="video">
            <iframe src="https://www.youtube.com/embed/Iphcba3qZkE?si=zdNuFhf9KRBJ99Zf"  frameborder="0" allowfullscreen title='video'></iframe>
            <div class="info">
                {/* <h2>Video 2 Title</h2> */}
                <p><b>Pay BBMP Property Tax Online @ bbmptax.karnataka.gov.in</b></p>
                <Card.Link href="#" style={{textDecoration:'none', color:'red', fontSize:'14px'}}><p> Read article<KeyboardDoubleArrowRightOutlinedIcon/></p> </Card.Link>
            </div>
        </div>
        <span style={{display:'inline-flex'}}>
          <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'16px', display:'flex', justifyItems:'start', marginLeft:'1rem'}}><p> See All <KeyboardDoubleArrowRightOutlinedIcon/></p> </Card.Link>
          {/* <Button href='#' style={{color:'white', marginLeft:'80%', background:'red', width:'50px'}}> Explore More</Button> */}
          </span>
    </div>
          </Item>
         </Grid>
         </Grid>
        </Box>
       </Row>
    </Container>
  );
}