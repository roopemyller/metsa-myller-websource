import { Box, Button, Snackbar, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

const CookieConsent = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Box sx={{
        bgcolor: 'background.paper',
        p: 2,
        borderRadius: 1,
        boxShadow: 3,
        maxWidth: 600,
        m: 2
      }}>
        <Typography variant="body2" paragraph>
          Käytämme sivustolla välttämättömiä evästeitä sivuston perustoiminnallisuuden takaamiseksi. 
          Lisätietoa henkilötietojen käsittelystä löydät tietosuojaselosteestamme.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAccept}>
          Hyväksyn
        </Button>
      </Box>
    </Snackbar>
  )
}

export default CookieConsent