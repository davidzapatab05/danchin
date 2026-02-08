import { CheckCircle2 } from "lucide-react"
import NextImage from "next/image"
import { ScrollAnimation } from "@/components/ui/scroll-animation"


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
        <section id="beneficios" className="py-40 overflow-hidden bg-gradient-to-b from-muted/30 to-background scroll-mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <ScrollAnimation animation="slide-right">
                            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <NextImage
                                    src="/images/bienestar.webp"
                                    alt="Bienestar y Relax"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </ScrollAnimation>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 -z-10" />
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20 -z-10" />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <ScrollAnimation animation="slide-left">
                            <div className="space-y-4">
                                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                                    ¿Por qué elegirnos?
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                                    Tu bienestar es nuestra <span className="text-primary">prioridad</span>
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Nuestro enfoque integral no solo trata el dolor físico, sino que busca mejorar tu calidad de vida general.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <ScrollAnimation key={index} delay={index * 100} animation="fade-in">
                                    <div className="flex items-start space-x-3 group">
                                        <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                            <CheckCircle2 className="h-4 w-4 text-secondary group-hover:text-inherit" />
                                        </div>
                                        <span className="text-foreground/80 font-medium group-hover:text-primary transition-colors">{benefit}</span>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>

                        <ScrollAnimation delay={400} animation="zoom-in">
                            <div className="p-8 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary mb-3">¿Listo para sentirte mejor?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Agenda tu cita hoy mismo y deja que nuestros especialistas cuiden de ti en la comodidad de tu hogar.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section >
    )
}
