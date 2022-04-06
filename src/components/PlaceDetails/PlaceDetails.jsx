import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import Rating from '@mui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({ place }) => {
  const classes = useStyles()

  return (
      <Card elevation={6}>
        <CardMedia
          style={{height: 350}}
          image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{place.name}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography variant="subtitle1">Price</Typography>

          </Box>
        </CardContent>
      </Card>
  )
}

export default PlaceDetails