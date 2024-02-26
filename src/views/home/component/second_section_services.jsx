import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, Button, Dialog, DialogContent, Slide, CircularProgress } from '@mui/material'
import OrangeDivider from 'src/components/ui/orange_divider';
import ServiceList from './serviceList';
import RegistrationFormPopUp from './registrationFormPopUp';
import FreeEbookFormPopUp from './freeEbookFormPopUp';

import { fetchServiceList } from 'src/redux/api/home_slice_api';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function SecondSectionServices() {
  const dispatch = useDispatch();

  const isServiceListLoading = useSelector((state) => state.home?.isServiceListLoading)
  const serviceList = useSelector((state) => state.home?.serviceList);

  const [openRegistrationDialogue, setOpenRegistrationDialogue] = useState(false);
  const [openFreeBookDialogue, setOpenFreeBookDialogue] = useState(false);

  useEffect(() => {
    dispatch(fetchServiceList());
  }, [dispatch])
  console.log("service list state", serviceList, isServiceListLoading);
  return (
    <Box sx={{ padding: "0px" }}>

      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "13.5px", marginTop: "13.5px" }} >
        <OrangeDivider >
          <Typography sx={{ fontSize: "13px", letterSpacing: "4px", color: "secondary.secondary_600", fontFamily: "Arial" }} >Best Services</Typography>
        </OrangeDivider>
        <Typography variant='h3' className='responsive_fontsize32' sx={{ color: "secondary.secondary_400", fontWeight: "bold", letterSpacing: "0.25px", lineHeight: "42px", marginBottom: "11px", fontFamily: "times new roman" }}>Services</Typography>
      </Box>

      <Box sx={{ pt: "47px", pb: "27px" }}>
        {
          isServiceListLoading ? <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "grey" }} />
          </Box> :
            (<ServiceList serviceList={serviceList} />)
        }
      </Box>


      <Box sx={{ display: "flex", justifyContent: "center", gap: "30px", my: "40px" }}>
        <Button onClick={() => setOpenRegistrationDialogue(true)}
          className="responsive_fontsize18" variant='outlined'
          sx={{ borderRadius: "0", color: "black", borderColor: "secondary.main", textTransform: "capitalize", fontWeight: "300", lineHeight: "21px", letterSpacing: "0.25px" }}>Registration</Button>


        <Button onClick={() => setOpenFreeBookDialogue(true)}
          className="responsive_fontsize18" variant='outlined'
          sx={{ borderRadius: "0", color: "black", borderColor: "secondary.main", textTransform: "capitalize", fontWeight: "300", lineHeight: "21px", letterSpacing: "0.25px" }}>Free Ebook</Button>
      </Box>
      {/* registration dialogue */}
      <Dialog
        open={openRegistrationDialogue}
        TransitionComponent={Transition}
        keepMounted
        onClose={() =>
          setOpenRegistrationDialogue(false)}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth


      >

        <DialogContent>
          <RegistrationFormPopUp />
        </DialogContent>

      </Dialog>
      {/* free book */}
      <Dialog
        open={openFreeBookDialogue}
        TransitionComponent={Transition}
        keepMounted
        onClose={() =>
          setOpenFreeBookDialogue(false)}
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogContent>
          <FreeEbookFormPopUp />
        </DialogContent>

      </Dialog>
    </Box>

  )
}

export default SecondSectionServices