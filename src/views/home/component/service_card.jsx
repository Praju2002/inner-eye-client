import React from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

function ServiceCard() {
    return (
        <Card sx={{ maxWidth: 275, backgroundColor: "secondary.main",height:"280px",p:"24px" }}>
            <CardContent >
                <Typography className="responsive_fontsize18" sx={{ fontWeight: "600", fontFamily: "Roboto Serif", color: "white", }} gutterBottom>
                    Sound Healing
                </Typography>
                <Typography className="responsive_fontsize14" sx={{fontWeight:"300",color:"white"}}>
                    Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa
                </Typography>
                
            </CardContent>
            
        </Card>
    )
}

export default ServiceCard