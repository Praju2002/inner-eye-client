import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';

function ServiceCard({item}) {
    return (
        <Card sx={{ maxWidth: 275, backgroundColor: "secondary.main",height:"280px",p:"24px" }}>
            <CardContent >
                <Typography className="responsive_fontsize18" sx={{ fontWeight: "600", fontFamily: "Roboto Serif", color: "white", }} gutterBottom>
                    {item?.title}
                </Typography>
                <Typography className="responsive_fontsize14" sx={{fontWeight:"300",color:"white"}}>
                {item?.description}
                </Typography>
                
            </CardContent>
            
        </Card>
    )
}

export default ServiceCard