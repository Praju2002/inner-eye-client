import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import OrangeDivider from 'src/components/ui/orange_divider';
import ServiceCard from './service_card';
function SecondSectionServices() {
  return (
    <Box sx={{}}>

      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} >
        <OrangeDivider >
          <Typography sx={{ fontSize: "13px", letterSpacing: "4px", color: "secondary.secondary_600", fontFamily: "Arial" }} >Best Services</Typography>
        </OrangeDivider>

        <Typography variant='h3' className='responsive_fontsize32' sx={{ color: "secondary.secondary_400", fontWeight: "bold", letterSpacing: "0.25px", lineHeight: "42px", fontFamily: "times new roman" }}>Services</Typography>


      </Box>
      <Box>
        <ServiceCard />
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",gap:"30px"}}>
        <Button className="responsive_fontsize18" variant='outlined' sx={{ borderRadius:"0",color: "black", borderColor: "secondary.main", textTransform: "capitalize", fontWeight: "300", lineHeight: "21px", letterSpacing: "0.25px" }}>Registration</Button>

        <Button className="responsive_fontsize18" variant='outlined' sx={{ borderRadius:"0",color: "black", borderColor: "secondary.main", textTransform: "capitalize", fontWeight: "300", lineHeight: "21px", letterSpacing: "0.25px" }}>Free Ebook</Button>
      </Box>
    </Box>
  )
}

export default SecondSectionServices