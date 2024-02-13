import React from 'react'
import Box from "@mui/material/Box";
import yoga from "../../../assets/images/yoga.png"
import { Button, Typography } from '@mui/material';


function FirstSectionLanding() {
    const renderYoga = <img src={yoga} alt="inner-eye-yoga" style={{ width: "550px", maxHeight: "550px" }} />;
    const body = <>
        <h1 style={{ fontSize: "30px", fontWeight: "600" }}>INNER EYE</h1>
        <Typography sx={{ justifyContent: "center", display: "flex" }}>Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; it's a sanctuary for the mind, body, and spirit. Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breath work, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
            At Inner Eye, our commitment goes beyond providing a retreat experience. We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.</Typography>
        <Button variant='contained' sx={{ backgroundColor: "secondary.secondary_600", opacity: "0.8", color: "white", "&:hover": { backgroundColor: "secondary.main", opacity: "1" } }}>About Us</Button>

    </>
    return (
        <>
            {/* desktop */}
            <Box sx={{ justifyContent: "space-between", width: "100%", alignItems: "center", display: { xs: "none", md: "flex" } }}>
                <Box sx={{ justifyContent: "center", width: "100%", alignItems: "center", display: { xs: "none", md: "flex" } }}>
                    <Box sx={{ maxWidth: "40rem", width: "100", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1.5rem" }} >
                        {body}
                    </Box>
                </Box>
                {renderYoga}
            </Box>
            
            {/* mobile */}
            <>
                <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center", m: 2, gap: "1.5rem" }}>
                    {renderYoga}
                    {body}
                </Box>
            </>
        </>
    );
};

export default FirstSectionLanding