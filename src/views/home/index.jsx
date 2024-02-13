import React from 'react'
import FirstSectionLanding from './component/first_section_landing'
import SecondSectionServices from './component/second_section_services'
import { Box } from '@mui/material'

function HomeView() {
    return (
        <main>
            <Box component="section" backgroundColor="primary.main">
                <div className='apply--maxwidth' >
                    <FirstSectionLanding />
                </div>
            </Box>

            <Box component="section" sx={{ backgroundColor: "white" }}>
                <div className='apply--maxwidth' >
                    <SecondSectionServices />
                </div>
            </Box>
        </main>
    )
}

export default HomeView