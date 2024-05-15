import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';

export default function MediaCard() {
  return (
    <Container className='advContainer'>
        <h2>Property Services</h2><br></br>
    <Grid container spacing={2} className='grids'>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 335 }} className='SerCards'>
          <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-zeroDp.jpg"
            title="Zero Security Desposite"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              Zero Security Desposite
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rent a Property & Pay Zero Deposit only with Magicbricks
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 335 }} className='SerCards'>
          <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-rental-agreement.jpg"
            title="Rental Agreement"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rental Agreement
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Online agreement drafting & stamping with home delivery
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 335 }} className='SerCards'>
          <CardMedia
            sx={{ height: 140 }} 
            image="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-vastu.webp"
            title="Vastu"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vastu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Consult the best Vastu Experts for your home or office
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Container>
  );
}
