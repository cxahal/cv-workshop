/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_API_URL: string
  // add other VITE_ prefixed env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}