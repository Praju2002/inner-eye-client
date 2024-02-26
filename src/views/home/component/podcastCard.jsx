import React from 'react'
import { Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material'
import podcast from 'src/assets/podcast/image 2.png'

function PodcastCard() {
    return (
        <Card sx={{ maxWidth: 290 }}>
            <CardActionArea href="https://www.youtube.com/watch?v=v7AYKMP6rOE">
                <CardMedia
                    component="img"
                    height="140"
                    image={podcast}
                    alt="green iguana"
                />
                  </CardActionArea>
                <CardContent>
                    <Typography className="responsive_fontsize16" sx={{ fontWeight: "700", fontFamily: "Roboto Serif", color: "black", }} gutterBottom>
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography className="responsive_fontsize14" sx={{ fontWeight: "400", color: "black" }}>
                        Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa
                    </Typography>
                </CardContent>
          
        </Card>
    )
}

export default PodcastCard