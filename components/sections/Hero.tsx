
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950">
            {/* Background Gradient/Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="w-full h-full bg-grid-slate-200/[0.04] dark:bg-grid-slate-800/[0.04]" />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-3xl space-y-8 animate-in slide-in-from-left duration-700 fade-in-20">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Fisioterapia & Bienestar Integral
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                        Recupera tu movilidad <span className="text-primary block mt-2">con atención profesional</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground md:pr-12 max-w-2xl">
                        Fisioterapia especializada a domicilio. Evaluamos y tratamos el origen de tu dolor para devolverte tu calidad de vida.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                            <a href="https://wa.me/51936000728?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20evaluaci%C3%B3n%20fisioterap%C3%A9utica." target="_blank" rel="noopener noreferrer">
                                <Phone className="h-5 w-5" />
                                Reservar Evaluación
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-base font-semibold h-14 px-8 rounded-full border-2" asChild>
                            <a href="/#servicios">
                                Ver Servicios
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
