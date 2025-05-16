/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react'

interface CookieConsentContextType {
    cookiesAccepted: boolean
    handleAcceptCookies: () => void
    handleRejectCookies: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
        const consent = localStorage.getItem('cookieConsent')
        return consent === 'accepted'
    })

    const handleAcceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setCookiesAccepted(true)
    }

    const handleRejectCookies = () => {
        localStorage.setItem('cookieConsent', 'rejected')
        setCookiesAccepted(false)
    }

    return (
        <CookieConsentContext.Provider value={{ 
            cookiesAccepted, 
            handleAcceptCookies,
            handleRejectCookies
        }}>
            {children}
        </CookieConsentContext.Provider>
    )
}

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext)
    if (context === undefined) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider')
    }
    return context
}