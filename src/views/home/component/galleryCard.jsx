import React from 'react'
import { Card, CardMedia } from '@mui/material';
import galleryimage from 'src/assets/gallery/galleryimage.png'
import './GalleryCard.css';

function GalleryCard() {
    return (
        <Card sx={{ maxWidth: 390 }} className="gallery-card">
            <CardMedia
                component="img"
                sx={{ width:"287",height: "334" ,backgroundSize: 'cover' }}
                image={galleryimage}
                title="gallery"
                
            />

        </Card>
        
    )
}

export default GalleryCard;