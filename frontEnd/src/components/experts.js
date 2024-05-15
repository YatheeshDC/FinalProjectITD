import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Container } from '@mui/material';


export default function RecipeReviewCard(){
  return (
    <Container className='insideCont'>
    <Row>
      <h2 style={{margin:'1rem'}}>Top Society Experts</h2>
    <Card sx={{ maxWidth: 320 }} className='expCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgb(222, 211, 69)' }} aria-label="Experts">
            V
          </Avatar>
        }
        title="VENUGOPAL VERMA" className='expTitle'
        subheader="Serving Societies Since 2006"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Societies served: &nbsp;</b>
        L and T Raintree Boulevard
        </Typography><br></br>
        <Link to="/more" size="small" style={{color:'red'}}><b>View all 20 Flats </b><FaArrowRight/></Link>
      </CardContent>
     </Card>

     
     <Card sx={{ maxWidth: 320 }} className='expCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgb(222, 211, 69)' }} aria-label="Experts">
            A
          </Avatar>
        }
        title="ALPHA REALESTATE" 
        subheader="Serving Societies Since 2019"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Societies served: &nbsp;</b>
         Bhartiya City Nikoo Homes Phase 2 </Typography><br></br>
        <Link size="small" style={{color:'red'}}><b>View all 20 Flats </b><FaArrowRight/></Link>
      </CardContent>
     </Card>

     <Card sx={{ maxWidth: 320 }} className='expCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgb(222, 211, 69)' }} aria-label="Experts">
            L
          </Avatar>
        }
        title="LIVING BANGALORE" className='expTitle'
        subheader="Serving Societies Since 2014"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Societies served: &nbsp;</b>
        Embassy Lake Terraces
        </Typography><br></br>
        <Link size="small" style={{color:'red'}}><b>View all 31 Flats </b><FaArrowRight/></Link>
      </CardContent>
     </Card>
    </Row>
    </Container>
  );
}