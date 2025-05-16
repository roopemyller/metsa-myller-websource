import { Box, Button, Snackbar, Typography, Link } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useCookieConsent } from './contexts/CookieConsentContext'

const CookieConsent = () => {
    const [open, setOpen] = useState(false)
    const { handleAcceptCookies, handleRejectCookies } = useCookieConsent()

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            setOpen(true)
        }
    }, [])

    const onAccept = () => {
        handleAcceptCookies()
        setOpen(false)
    }

    const onReject = () => {
        handleRejectCookies()
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
          Lisätietoa henkilötietojen käsittelystä löydät {' '}
          <Link component={RouterLink} to="/tietosuoja">tietosuojaselosteestamme</Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={onAccept}>
            Hyväksyn evästeet
          </Button>
          <Button variant="outlined" color="error" onClick={onReject}>
            En hyväksy evästeitä
          </Button>
        </Box>
       
      </Box>
    </Snackbar>
  )
}

export default CookieConsent