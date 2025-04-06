import { Box, Typography, Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Firewood from "./Firewood"
import ForestryServices from "./ForestryServices"

const Services : React.FC = () => {
    const [value, setValue] = useState('1');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box maxWidth={"850px"}>
            <Typography variant="h2">PALVELUT</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center', mt: 5}}>
                <Typography variant="body1">
                    Lue lisää alta tarjoamistamme palveluista ja hinnoistamme!
                </Typography>

                <Button variant="outlined" color="primary" component={Link} to="/yhteystiedot">Pyydä tarjous!</Button>            
            </Box>
            <br/><br/>
            <Box
                component="img"
                src="./yleis-3.jpg"
                alt="Metsä-Myller Yleiskuva"
                sx={{
                    width: '100%',
                    maxWidth: '850px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                }}
            />
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
                    <TabList onChange={handleChange} aria-label="services tabs" variant="fullWidth">
                    <Tab label="Metsätyöpalvelut" value="1" />
                    <Tab label="Polttopuut" value="2" />
                    </TabList>
                </Box>
                <Box sx={{ width: '100%', maxWidth: '850px', margin: '0 auto' }}>
                    <TabPanel value="1">
                        <ForestryServices/>
                    </TabPanel>
                    <TabPanel value="2">
                        <Firewood/>
                    </TabPanel>
                </Box>
            </TabContext>
        </Box>
    )
}



export default Services