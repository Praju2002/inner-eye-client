import React from 'react';
import { Box, Typography, Card, CardContent } from "@mui/material";
import satsang from "src/assets/event/satsang.png";

function EventCard() {
  return (
    <Card sx={{ maxWidth: "287px", width: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <img src={satsang} alt="satsang" style={{ objectFit: "cover", width: "100%" }} />
        <CardContent sx={{ width:"278px",position: "absolute",bottom:"0", backgroundColor: "#00000040"  }}>
          <Typography className='responsive_fontSize18' sx={{ color: "white", fontFamily:"Times New Romen" , fontWeight:"700", lineHeight:"20px"}}>
            Satsang
          </Typography>
          <Typography sx={{fontFamily:"Times New Romen", fontWeight:"400",fontSize:"12px",lineHeight:"14px",color:"#DEDEDE"}}>
          Godawari -03, Kailali
          </Typography>
          <Typography sx={{fontFamily:"Times New Romen",fontWeight:"400",fontSize:"12px",lineHeight:"14px",color:"#D6D6D6"}}>
          2080-10-28, 7AM
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default EventCard;