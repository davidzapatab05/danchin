import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Contact() {
    return (
        <section id="contacto" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pattern-grid-lg" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Llevamos la clínica a tu sala?</h2>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                    Reserva tu sesión a domicilio ahora mismo y empieza tu camino hacia una vida sin dolor.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto text-lg h-14 px-8 bg-white text-primary hover:bg-white/90 font-bold shadow-xl"
                        asChild
                    >
                        <a href="https://wa.me/51936000728?text=Hola,%20tengo%20una%20consulta%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-6 w-6" />
                            WhatsApp: 936 000 728
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
