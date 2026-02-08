import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container mx-auto px-4 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary tracking-tight">Danchin</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Tu centro especializado en fisioterapia y bienestar integral. Recupera tu vitalidad sin salir de casa.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Servicios</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#servicios" className="hover:text-primary transition-colors">Masajes Terapéuticos</Link></li>
                            <li><Link href="/#servicios" className="hover:text-primary transition-colors">Ajuste de Columna</Link></li>
                            <li><Link href="/#servicios" className="hover:text-primary transition-colors">Rehabilitación</Link></li>
                            <li><Link href="/#servicios" className="hover:text-primary transition-colors">Aromaterapia</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Empresa</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="/politica-de-privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/terminos-y-condiciones" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="/#contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Contacto</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Lima, Perú</li>
                            <li>+51 936 000 728</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Danchin Fisioterapia & Bienestar. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
