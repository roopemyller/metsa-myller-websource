/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HCAPTCHA_SITEKEY: string
  readonly VITE_WEB3FORMS_ACCESS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}