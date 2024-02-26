import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import OrangeDivider from 'src/components/ui/orange_divider';
import EventList from './EventList';

function EventSection(){
    return(<>
        
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "13.5px", marginTop: "13.5px" }} >
      <OrangeDivider >
        <Typography sx={{ fontSize: "13px", letterSpacing: "4px", color: "secondary.secondary_600", fontFamily: "Arial" }} >Feel Together</Typography>
      </OrangeDivider>
      <Typography variant='h3' className='responsive_fontsize32' sx={{ color: "secondary.secondary_400", fontWeight: "bold", letterSpacing: "0.25px", lineHeight: "42px", marginBottom: "11px", fontFamily: "times new roman" }}>Events</Typography>
    </Box>

    <Box sx={{ }}>
      <EventList />
    </Box>
    </>
    )
}
export default EventSection;