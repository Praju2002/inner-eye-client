import React from 'react'
import { Card, CardMedia, CardHeader, Avatar, Typography, CardContent } from '@mui/material';


function BlogCard() {
    return (
        <Card sx={{ maxWidth: '90%', padding: '1rem' }}>

            <CardContent>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis
                    Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis
                    Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis
                    Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis
                </Typography>
            </CardContent>
            <CardHeader
                style={{
                    backgroundColor: 'transparent !important',
                    border: 'none',
                    backfaceVisibility: 'hidden', // This should hide the card header when it is not being viewed
                }}
            avatar={<Avatar alt="blog image" src="src/assets/logo/logo.png" />}
            title="Yoga Relax Your Mind"
            subheader="Inner Eye"
            
    />
        </Card>
    )
}

export default BlogCard;