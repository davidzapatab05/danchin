import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Activity, Heart, UserCheck, Stethoscope } from "lucide-react"

const services = [
    {
        title: "Ajuste de Columna",
        description: "Alineación vertebral y corrección postural para el tratamiento eficaz de dolores de espalda crónicos.",
        icon: Activity,
    },
    {
        title: "Terapia Manual",
        description: "Técnicas especializadas de manipulación y masaje terapéutico (Sueco/Sabai) para reducir la tensión muscular.",
        icon: Heart,
    },
    {
        title: "Manejo del Dolor",
        description: "Protocolos clínicos para el alivio de ciática, lumbalgia y cervicalgia mediante abordaje integral.",
        icon: UserCheck,
    },
    {
        title: "Rehabilitación Física",
        description: "Recuperación funcional post-lesión y readaptación deportiva con planes de ejercicio terapéutico.",
        icon: Stethoscope,
    },
]

export function Services() {
    return (
        <section id="servicios" className="py-32 bg-gradient-to-b from-background to-muted/30 scroll-mt-24">
            <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                            Nuestros Tratamientos
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Bienestar diseñado para ti
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Combinamos técnicas manuales avanzadas con un enfoque humano para ofrecerte resultados reales y duraderos.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <ScrollAnimation key={index} delay={index * 100} className="h-full">
                                <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader className="pb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-secondary/20 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-6 text-primary transition-colors duration-300">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
