import React from "react";
import { Box, Button } from "@mui/material";
import OrangeDivider from 'src/components/ui/orange_divider';

import yoga from "../../../assets/images/yoga.png";

function FirstSectionLanding() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection:{xs:"column-reverse" ,md:"row"}
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          maxWidth: "40rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "600",
            
          }}
        >
            <OrangeDivider>
            Inner Eye
            </OrangeDivider>
          
        </h1>
        <p className="responsive_fontsize20">
          Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a
          retreat; it's a sanctuary for the mind, body, and spirit. Our
          personalized packages cater to your unique needs, offering a blend of
          yoga, meditation, sound healing, breath work, naval treatment,
          psychosocial counseling, spiritual counseling, and past life
          regression. At Inner Eye, our commitment goes beyond providing a
          retreat experience. We empower you to integrate wellness into your
          everyday life. Join us on this transformative journey, and let the
          Inner Eye guide you to a life of balance, clarity, and inner harmony.
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.secondary_600",
            opacity: "0.8",
            color: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: "1",
            },
          }}
        >
          About Us
        </Button>
      </Box>
      {/* RIGHT SIDE */}
      <img src={yoga} alt="Yoga" style={{ maxHeight: "550px" }} />
    </Box>
  );
}

export default FirstSectionLanding;