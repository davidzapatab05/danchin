import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Danchin',
        short_name: 'Danchin',
        description: 'Recupera tu vitalidad sin salir de casa. Especialistas en fisioterapia, masajes y bienestar integral.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#10b981',
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/icons/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/icons/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
        ],
    }
}
