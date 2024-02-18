import React, { useState } from 'react'
import { Box, Typography, Button, Dialog, DialogContent, Slide } from '@mui/material'
import OrangeDivider from 'src/components/ui/orange_divider';
import PodcastList from './podcastList';

function Podcast(){
    return(<>
        
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "13.5px", marginTop: "13.5px" }} >
      <OrangeDivider >
        <Typography sx={{ fontSize: "13px", letterSpacing: "4px", color: "secondary.secondary_600", fontFamily: "Arial" }} >Mental health, spirituality & holistic healing</Typography>
      </OrangeDivider>
      <Typography variant='h3' className='responsive_fontsize32' sx={{ color: "secondary.secondary_400", fontWeight: "bold", letterSpacing: "0.25px", lineHeight: "42px", marginBottom: "11px", fontFamily: "times new roman" }}>Podcast</Typography>
    </Box>

    <Box sx={{ pt: "47px", pb: "27px" }}>
      <PodcastList />
    </Box>
    </>
    )
}
export default Podcast