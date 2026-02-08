import { ScrollAnimation } from "@/components/ui/scroll-animation"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Users } from "lucide-react"
import { FeaturePlaceholder } from "@/components/ui/feature-placeholder"

const features = [
    "Ahorra tiempo y evita el tráfico de Lima.",
    "Comodidad y privacidad en tu propio espacio.",
    "Atención personalizada sin prisas.",
    "Todo el equipo necesario (camilla, insumos) incluido.",
]

export function HomeVisit() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Content */}
                    <div className="w-full lg:w-1/2 relative">
                        <ScrollAnimation animation="slide-right">
                            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <NextImage
                                    src="/images/domicilio.webp"
                                    alt="Fisioterapia a Domicilio"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </ScrollAnimation>
                        {/* Floating Card */}
                        <ScrollAnimation delay={300} animation="zoom-in" className="absolute -bottom-8 md:bottom-8 -left-4 md:-left-8 z-10">
                            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 max-w-xs">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">Protocolos Seguros</p>
                                        <p className="text-sm text-muted-foreground">Higiene y bioseguridad garantizada</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <ScrollAnimation animation="slide-left">
                            <div>
                                <div className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-4">
                                    Fisioterapia a Domicilio
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                                    Llevamos la clínica <br />
                                    <span className="text-primary">a la comodidad de tu hogar</span>
                                </h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                                Entendemos que cuando hay dolor, moverse es difícil. Por eso, nuestro servicio a domicilio está diseñado para ofrecerte la misma calidad clínica que en un consultorio, pero en tu sala.
                            </p>
                            <ul className="space-y-4 mt-6">
                                {features.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground/80 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-8">
                                <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20" asChild>
                                    <a href="https://wa.me/51936000728?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20la%20atenci%C3%B3n%20a%20domicilio." target="_blank" rel="noopener noreferrer">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Agendar Visita
                                    </a>
                                </Button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}
