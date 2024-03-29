import React from "react";
import { Box, Button, Typography } from "@mui/material";
import OrangeDivider from 'src/components/ui/orange_divider';

import yoga from "../../../assets/images/yoga.png";

function FirstSectionLanding() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column-reverse", md: "row" }
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
          <Typography variant="h1"
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              color: "secondary.secondary_400"

            }}
          >
            <OrangeDivider>
              INNER EYE
            </OrangeDivider>

          </Typography>
          <p className="responsive_fontsize20" >
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

      </Box >
      <Typography className="responsive_fontsize32" sx={{ color:"secondary.secondary_400",}}
        style={{
        // display: "flex",
        //   flexDirection: "column",
          fontFamily: "Roboto Serif",
          // fontSize: "32px",
          fontStyle: "italic",
          fontWeight: "700",
          lineHeight: "37px",
          letterSpacing: "0em",
          textAlign: "right",
          textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)", 
          
        }}
      >
        “Nestled in the lap of the Himalayas in Nepal”
      </Typography>

    </Box>
  );
}

export default FirstSectionLanding;