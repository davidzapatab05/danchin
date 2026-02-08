import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { CountUp } from "@/components/ui/count-up"
import { Dna } from "lucide-react"

export function About() {
    return (
        <section id="nosotros" className="py-24 min-h-screen flex items-center bg-muted/30 scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <ScrollAnimation animation="slide-right">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                Rehabilitación dirigida por<br />
                                <span className="text-primary">Daniel Chinguel</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                                Nuestro enfoque combina la evidencia científica con un trato profundamente humano. No solo tratamos síntomas; buscamos entender tu estilo de vida para ofrecerte soluciones sostenibles.
                            </p>
                            <div className="space-y-4 mt-6">
                                <p className="text-muted-foreground">
                                    <strong className="text-foreground block mb-1">Nuestra Filosofía:</strong>
                                    "El movimiento cura. Nuestro objetivo es devolverte la independencia y la confianza en tu cuerpo lo más rápido posible, sin tratamientos eternos innecesarios."
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-8">
                                <div className="p-4 bg-background rounded-2xl border border-border/50 shadow-sm">
                                    <p className="text-3xl font-bold text-primary mb-1">
                                        <CountUp end={1000} prefix="+" />
                                    </p>
                                    <p className="text-sm text-muted-foreground font-medium">Pacientes Recuperados</p>
                                </div>
                                <div className="p-4 bg-background rounded-2xl border border-border/50 shadow-sm">
                                    <p className="text-3xl font-bold text-primary mb-1">
                                        <CountUp end={100} suffix="%" />
                                    </p>
                                    <p className="text-sm text-muted-foreground font-medium">Atención Personalizada</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Image / Visual */}
                    <div className="w-full lg:w-1/2">
                        <ScrollAnimation animation="zoom-in" delay={200}>
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-6 opacity-20" />
                                <div className="absolute inset-0 bg-card rounded-[2rem] shadow-2xl border border-border overflow-hidden rotate-0 transition-transform hover:-rotate-2 duration-500">
                                    {/* Abstract Medical Concept */}
                                    <div className="w-full h-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center flex-col gap-6 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                                        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-700">
                                            <Dna className="w-16 h-16 text-primary animate-pulse-slow" />
                                        </div>
                                        <div className="text-center z-10 px-6">
                                            <p className="text-lg font-bold text-foreground">Ciencia & Movimiento</p>
                                            <p className="text-sm text-muted-foreground mt-1">Estructura • Función • Salud</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}
