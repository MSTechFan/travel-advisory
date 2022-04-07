import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined'
import Rating from '@mui/lab/Rating'

import useStyles from './styles'

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')

  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyADRttDSm_16gLyTiOuDR4Uw6xJRHcUyxI'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(event) => {
          console.log(event)
          setCoordinates({lat: event.center.lat, lng: event.center.lng})
          setBounds({ne: event.marginBounds.ne, sw: event.marginBounds.sw})
        }}
        onChildClick={(child) => {}}        
      >
      {places?.map((place, i) => (
        <div 
          className={classes.markerContainer}
          lat={Number(place.latitude)}
          lng={Number(place.longitude)}
          key={i}
        >
          {
            !isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper eleveation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img 
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly/>
              </Paper>
            )
          }
        </div>
      ))}

      </GoogleMapReact>
    </div>
  )
}

export default Map