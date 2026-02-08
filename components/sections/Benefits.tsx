import { CheckCircle2 } from "lucide-react"
import NextImage from "next/image"


const benefits = [
    "Adiós al estrés y ansiedad",
    "Prevención de migrañas tensionales",
    "Mejora tu salud cardiovascular",
    "Evita infartos y mejora la circulación",
    "Atención personalizada en tu hogar",
    "Profesionales certificados y equipados"
]

export function Benefits() {
    return (
        <section id="beneficios" className="py-40 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <NextImage
                                src="/images/bienestar.webp"
                                alt="Bienestar y Relax"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-50 z-0" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-40 z-0" />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                                Bienestar y Relax
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Nuestro enfoque integral no solo trata el dolor físico, sino que busca mejorar tu calidad de vida general.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                                    <span className="text-foreground/80 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <h3 className="font-semibold text-primary mb-2">¿Listo para sentirte mejor?</h3>
                            <p className="text-sm text-muted-foreground">
                                Agenda tu cita hoy mismo y deja que nuestros especialistas cuiden de ti en la comodidad de tu hogar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
