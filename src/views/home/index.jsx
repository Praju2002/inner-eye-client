import React from 'react'
import FirstSectionLanding from './component/first_section_landing'
import SecondSectionServices from './component/second_section_services'
import { Box } from '@mui/material'
import Podcast from './component/thirdSection'
import Gallery from './component/fourthSection'

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
            <Box component="section" sx={{ backgroundColor: "primary.main" }}>
                <div className='apply--maxwidth' >
                    <Podcast />
                </div>
            </Box>
            <Box component="section" sx={{ backgroundColor: "white" }}>
                <div className='apply--maxwidth' >
                    <Gallery />
                </div>
            </Box>
        </main>
    )
}

export default HomeView