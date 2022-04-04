import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined'
import Rating from '@mui/lab'

import useStyles from './styles'

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')

  
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
        onChildClick={''}
        
        >

      </GoogleMapReact>
    </div>
  )
}

export default Map