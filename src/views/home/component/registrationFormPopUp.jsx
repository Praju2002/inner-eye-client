import React from "react";

import {
    Box,
    Typography,
    TextField,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Checkbox,
    Button,
    Grid,
} from "@mui/material";
import { useState } from "react";

function RegistrationFormPopup() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [occupation, setOccupation] = useState("");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [packageType, setPackageType] = useState("");
    const [affilation, setAffiliation] = useState("");
    const [teamSize, setTeamSize] = useState("single");
    const [memberNumber, setMemberNumber] = useState("");
    const [isTermsChecked, setIsTermsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data", name, age, gender, email, address, phoneNumber, occupation, medicalHistory, packageType, affilation, teamSize, memberNumber, isTermsChecked);
        

    }

    const handleNameChange = (e) => {
        console.log("name", e);
        setName(e.target.value)
    }

    return (
        <div>
            {/* Heading */}
            <Box>
                <Typography
                    className="responsive__fontsize18"
                    sx={{
                        fontWeight: "600",
                        lineHeight: "21px",
                        color: "secondary.secondary_600",
                        textTransform: "uppercase",
                        textAlign: "center"
                    }}
                >
                    Inner Eye
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "300",
                        color: "secondary.secondary_600",
                        mt: "7px",
                        textAlign: "center"
                    }}
                    className="responsive__fontsize14"
                >
                    Registration Form
                </Typography>
            </Box>


            {/* Actual Form */}
            <Box sx={{ mt: "1rem" }}>
                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                size="small"
                                value={name}
                                onChange={handleNameChange}
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl
                                size="small"
                                fullWidth
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                            >
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={(e) => setGender(e.target.value)}

                                // onChange={handleChange}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="others">Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="number"
                                id="outlined-basic"
                                label="Age"
                                variant="outlined"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="email"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                                size="small"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="text"
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                                size="small"
                            />{" "}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Phone Number"
                                variant="outlined"
                                size="small"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                            />{" "}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Occupation"
                                variant="outlined"
                                size="small"
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                            />{" "}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Medical History"
                                variant="outlined"
                                size="small"
                                value={medicalHistory}
                                onChange={(e) => setMedicalHistory(e.target.value)}
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                            />{" "}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl
                                size="small"
                                fullWidth
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                            >
                                <InputLabel id="demo-simple-select-label">
                                    Package Type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={packageType}
                                    onChange={(e) => setPackageType(e.target.value)}
                                    label="Package Type"
                                // onChange={handleChange}
                                >
                                    <MenuItem value="basic">Basic</MenuItem>
                                    <MenuItem value="standard">Standard</MenuItem>
                                    <MenuItem value="premium">Premium</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Any other affilations"
                                variant="outlined"
                                size="small"
                                value={affilation}
                                onChange={(e) => setAffiliation(e.target.value)}
                                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                            />{" "}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(e.target.value)}
                                >
                                    <FormControlLabel
                                        value="single"
                                        control={<Radio />}
                                        label="Single"
                                    />
                                    <FormControlLabel
                                        value="group"
                                        control={<Radio />}
                                        label="Group"
                                    />
                                </RadioGroup>
                            </FormControl>{" "}
                        </Grid>
                        {teamSize !== "single" && (
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Enter Member Number"
                                    variant="outlined"
                                    size="small"
                                    value={memberNumber}
                                    onChange={(e) => setMemberNumber(e.target.value)}
                                    sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                                />{" "}
                            </Grid>
                        )}
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                value={isTermsChecked}
                                onChange={(e) => setIsTermsChecked(e.target.value)}
                                label="I hereby agree to the present and future terms & conditions of inner eye pvt.ltd"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ backgroundColor: "secondary.main", color: "white" }}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    );
}

export default RegistrationFormPopup;
