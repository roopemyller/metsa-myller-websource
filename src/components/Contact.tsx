import { Box, Typography, Button, Stack, TextField, Divider  } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { getImagePath } from "./ImagePath"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { useCookieConsent } from "./contexts/CookieConsentContext";

const Contact : React.FC = () => {

    const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" })
    const [status, setStatus] = useState<string | null>(null)
    const [token, setToken] = useState<string | null>(null)
   
    const captchaRef = useRef<HCaptcha>(null)

    const { cookiesAccepted, handleAcceptCookies } = useCookieConsent()
    // const cookieConsent = localStorage.getItem('cookieConsent')

    useEffect(() => {
        if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY) {
            console.error('Web3Forms access key not found in environment variables')
        }
        if (!import.meta.env.VITE_HCAPTCHA_SITEKEY) {
            console.error('hCaptcha site key not found in environment variables')
        }
        
        let timeoutId: NodeJS.Timeout
        
        if (status) {
            timeoutId = setTimeout(() => {
                setStatus(null);
            }, 5000)
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
    }, [status])

    const onHCaptchaChange = (token : string) => {
        setToken(token)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!token) {
            setStatus("Ole hyvä ja suorita captcha-vahvistus.")
            return
        }
        const data = new FormData()
        data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
        data.append("from_name", "metsa-myller.fi")
        data.append("subject", `Yhteydenotto henkilöltä ${formData.name} - metsa-myller.fi`)
        data.append("name", formData.name)
        data.append("email", formData.email)
        data.append("number", formData.number)
        data.append("message", formData.message)
        data.append("h-captcha-response", token)

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            })
        
            if (response.ok) {
                setStatus("Viesti lähetetty! Vastaan mahdollisimman pian.")
                setFormData({ name: "", email: "", number:"", message: "" })
                setToken(null)
                captchaRef.current?.resetCaptcha()
            } else {
                setStatus("Viestin lähettäminen epäonnistui. Yritä uudelleen.")
            }
        } catch (error) {
            setStatus("Viestin lähettäminen epäonnistui. Yritä uudelleen.")
            console.error("Error sending message:", error)
        }
      }

    return (
        <Box sx={{maxWidth: "850px", width: "100%", margin: "0 auto"}}>
            <Typography variant="h2" sx={{wordBreak: "break-word", fontSize: { xs: '2.5rem', md: '3.5rem' }}}>
                YHTEYSTIEDOT
            </Typography>

            <Typography mb={1}>
                Ota rohkeasti yhteyttä! Voit soittaa, laittaa viestiä tai käyttää alla olevaa lomaketta.
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    borderRadius: 2,
                    p: { xs: 2, sm: 3 },
                    mb: 2,
                    display: 'flex',
                    flexDirection: { xs: 'row', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    boxShadow: 3,
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: 6,
                    },
                    textDecoration: 'none',
                    
                }}
                component="a"
                href="tel:0400858720"
            >
                <LocalPhoneIcon sx={{ fontSize: 28, color: 'white' }} />
                <Typography
                    variant="h5"
                    color="white"
                    sx={{
                        fontWeight: 'bold',
                        letterSpacing: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                    }}
                >
                    0400 858 720
                </Typography>
            </Box>
            <Typography mb={4}>
                Päiväsaikaan tavoittaa parhaiten tekstiviestillä tai sähköpostilla, koska sahan pärinän yli ei puhelimen sointia tahdo kuulla.
            </Typography>

            <Box
                component="img"
                src={getImagePath("/auto-sony-crop-1.webp")}
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

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                justifyContent="space-between"
                paddingTop={3}
            >
                {/* Left Side: Contact Form */}
                <Box sx={{ flex: 1, mb: 4 }}>
                    {cookiesAccepted ? (
                        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 1.5}}>
                            <TextField name="name" value={formData.name} label="Koko nimi" variant="outlined" fullWidth required onChange={handleChange} />
                            <TextField name="email" value={formData.email} label="Sähköposti" type="email" variant="outlined" fullWidth required onChange={handleChange} />
                            <TextField name="number" value={formData.number} label="Puhelinnumero" type="tel" variant="outlined" fullWidth required onChange={handleChange}/>
                            <TextField name="message" value={formData.message} label="Viesti" multiline rows={4} variant="outlined" fullWidth required onChange={handleChange}/>
                            <HCaptcha
                                sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
                                ref={captchaRef}
                                reCaptchaCompat={false}
                                onVerify={onHCaptchaChange}
                                languageOverride="fi"
                            />
                            <Button sx={{fontSize: 18}} variant="contained" color="primary" size="large" type="submit">
                                Lähetä viesti   
                            </Button>
                            {status && <Typography color="primary">{status}</Typography>}
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography variant="body2" color="error">
                                Yhteydenottolomakkeen käyttö vaatii evästeiden hyväksymisen roskapostin estämiseksi.
                            </Typography>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                onClick={handleAcceptCookies}
                                sx={{ alignSelf: 'flex-start' }}
                            >
                                Hyväksy evästeet
                            </Button>
                        </Box>
                    )}    
                </Box>
                {/* Divider */}
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: "none", md: "block" } }}
                />
                <Divider
                    orientation="horizontal"
                    flexItem
                    sx={{ display: { md: "none", xs: "block" } }}
                />

                {/* Right Side: Contact Info */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                        Yhteystiedot
                    </Typography>

                    <Typography variant="body1">Metsätyöt ja pihapuiden poistot</Typography>
                    <Typography variant="body1">Metsätyö Petri Myller</Typography>
                    <Typography variant="body2">Y-tunnus: 2617685-6</Typography>
                    <Typography variant="body2">0400 858 720</Typography>
                    <Typography variant="body2"><a href="mailto:petri@metsa-myller.fi">petri@metsa-myller.fi</a></Typography>
                    <Typography variant="body2">Särkäntie 14, 80100 Joensuu</Typography>

                    <Box mt={2}>
                        <Typography variant="body1">Polttopuut</Typography>
                        <Typography variant="body1">Metsäyhtymä Myller Janne ja Petri</Typography>
                        <Typography variant="body2">Y-tunnus: 2313467-7</Typography>

                        <Typography variant="body1" mt={1}>Petri Myller</Typography>
                        <Typography variant="body2">0400 858 720</Typography>
                        <Typography variant="body2"><a href="mailto:petri@metsa-myller.fi">petri@metsa-myller.fi</a></Typography>
                        <Typography variant="body2">Särkäntie 14, 80100 Joensuu</Typography>

                        <Typography variant="body1" mt={1}>Janne Myller</Typography>
                        <Typography variant="body2">050 563 9668</Typography>
                        <Typography variant="body2">janne@metsa-myller.fi</Typography>
                        <Typography variant="body2">Maanmittarintie 32, 80100 Joensuu</Typography>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Contact