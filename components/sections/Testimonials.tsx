import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        name: "María Fernández",
        role: "Paciente de Lumbalgia",
        text: "Después de semanas con dolor de espalda que no me dejaba dormir, dos sesiones con Daniel hicieron la diferencia. Su trato es excelente y muy profesional.",
        rating: 5,
    },
    {
        name: "Carlos Ruiz",
        role: "Deportista Amateur",
        text: "La terapia de descarga muscular fue justo lo que necesitaba para mi preparación de maratón. Recomiendo totalmente el servicio a domicilio, súper puntual.",
        rating: 5,
    },
    {
        name: "Elena Gómez",
        role: "Paciente Geriátrico",
        text: "Daniel atiende a mi madre con una paciencia y dedicación admirables. Hemos visto una gran mejora en su movilidad. ¡Gracias Danchin!",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                            Testimonios
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Historias de <span className="text-primary">Alivio Real</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Lo que dicen nuestros pacientes sobre su recuperación.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Decorative blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

                    {testimonials.map((testimonial, index) => (
                        <ScrollAnimation key={index} delay={index * 200} animation="slide-up" className="h-full">
                            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group">
                                <CardContent className="pt-8 px-8 pb-8 flex-grow flex flex-col">
                                    <Quote className="h-10 w-10 text-primary mb-6 opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                    </div>
                                    <p className="text-foreground/80 italic mb-8 leading-relaxed flex-grow">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-border/50">
                                        <p className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                                        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
