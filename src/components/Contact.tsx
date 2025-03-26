import { Box, Typography, Button, Stack, TextField, Divider  } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import HCaptcha from '@hcaptcha/react-hcaptcha'

const Contact : React.FC = () => {

    const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" })
    const [status, setStatus] = useState<string | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const captchaRef = useRef<HCaptcha>(null)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        
        if (status) {
            timeoutId = setTimeout(() => {
                setStatus(null);
            }, 5000)
        }

        // Cleanup function to clear timeout if component unmounts or status changes
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
        data.append("access_key", "c5a1bb6b-bbf7-4786-b33c-5a9c0ddd553a")
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
        }
      }

    return (
        <Box>
            <Typography variant="h2">
                YHTEYDENOTTO
            </Typography>

            <Typography mb={1}>
                Ota rohkeasti yhteyttä! Voit soittaa, laittaa viestiä tai käyttää alla olevaa lomaketta.
            </Typography>

            <Typography mb={4}>
                Päiväsaikaan tavoittaa parhaiten tekstiviestillä tai sähköpostilla, koska sahan pärinän yli ei puhelimen sointia tahdo kuulla.
            </Typography>

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                justifyContent="space-between"
            >
        {/* Left Side: Contact Form */}
        <Box sx={{ flex: 1, mb: 4 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 1.5}}>
                <TextField name="name" value={formData.name} label="Koko nimi" variant="outlined" fullWidth required onChange={handleChange} />
                <TextField name="email" value={formData.email} label="Sähköposti" type="email" variant="outlined" fullWidth required onChange={handleChange} />
                <TextField name="number" value={formData.number} label="Puhelinnumero" type="tel" variant="outlined" fullWidth required onChange={handleChange}/>
                <TextField name="message" value={formData.message} label="Viesti" multiline rows={4} variant="outlined" fullWidth required onChange={handleChange}/>
                <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    ref={captchaRef}
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                    languageOverride="fi"
                />
                <Button variant="contained" color="primary" size="large" type="submit">
                Lähetä viesti
                </Button>
                {status && <Typography color="primary">{status}</Typography>}
            </Box>
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
                    <Typography variant="body2">petri@metsa-myller.fi</Typography>
                    <Typography variant="body2">Särkäntie 14, 80100 Joensuu</Typography>

                    <Box mt={2}>
                        <Typography variant="body1">Polttopuut</Typography>
                        <Typography variant="body1">Metsäyhtymä Myller Janne ja Petri</Typography>
                        <Typography variant="body2">Y-tunnus: 2313467-7</Typography>

                        <Typography variant="body1" mt={1}>Petri Myller</Typography>
                        <Typography variant="body2">0400 858 720</Typography>
                        <Typography variant="body2">petri@metsa-myller.fi</Typography>
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