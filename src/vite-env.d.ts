/**
 * Define our environment variables here.
 * Do not set them here. Simply define the interface
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    //More env vars go here
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}