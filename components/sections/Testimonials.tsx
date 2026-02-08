"use client"

import * as React from "react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    {
        name: "Roberto Sánchez",
        role: "Ejecutivo",
        text: "Excelente servicio. Daniel es muy profesional y explica cada paso del proceso. Mi dolor de cuello persistente desapareció por completo.",
        rating: 5,
    },
    {
        name: "Lucía Méndez",
        role: "Ama de Casa",
        text: "La comodidad de recibir terapia en casa no tiene precio. El equipo que traen es de primera y los resultados se sienten desde la primera sesión.",
        rating: 5,
    },
    {
        name: "Jorge Castro",
        role: "Futbolista Amateur",
        text: "Muy recomendado para deportistas. Me ayudó con una lesión de rodilla que otros no pudieron resolver. Gran conocimiento técnico y humano.",
        rating: 5,
    },
]

export function Testimonials() {
    const scrollRef = React.useRef<HTMLDivElement>(null)

    const scroll = (direction: 'prev' | 'next') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo = direction === 'prev'
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <section id="testimonios" className="py-24 bg-background scroll-mt-20">
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

                <div className="relative group">
                    <div
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 px-4 -mx-4 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        ref={scrollRef}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center first:pl-0"
                            >
                                <ScrollAnimation key={index} delay={index * 100} animation="slide-up" className="h-full">
                                    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col group/card">
                                        <CardContent className="pt-8 px-8 pb-8 flex-grow flex flex-col">
                                            <Quote className="h-10 w-10 text-primary mb-6 opacity-20 group-hover/card:opacity-40 transition-opacity" />
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400 text-lg">★</span>
                                                ))}
                                            </div>
                                            <p className="text-foreground/80 italic mb-8 leading-relaxed flex-grow">
                                                "{testimonial.text}"
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-border/50">
                                                <p className="font-bold text-foreground group-hover/card:text-primary transition-colors">{testimonial.name}</p>
                                                <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-primary/20 hover:bg-primary/10 text-primary"
                            onClick={() => scroll('prev')}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-primary/20 hover:bg-primary/10 text-primary"
                            onClick={() => scroll('next')}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
