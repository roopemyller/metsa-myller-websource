import { Box, Typography, Button,  } from "@mui/material"
import { Link } from "react-router-dom"

const Contact : React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'left'}}>
            <Typography variant="h2">YHTEYDENOTTO</Typography>
            <Typography variant="body1">
                Yhteydenotto
            </Typography>
            <br />
            <Button variant="outlined" color="primary" component={Link} to="/">Ota yhteyttä!</Button>            
        </Box>
    )
}

export default Contact