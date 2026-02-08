import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function TermsAndConditions() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-foreground">Términos y Condiciones</h1>

                <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>
                        Bienvenido a <strong>Danchin Fisioterapia & Bienestar</strong>. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos y Condiciones.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">1. Servicios</h2>
                    <p>
                        Danchin ofrece servicios de fisioterapia, rehabilitación física, masoterapia y bienestar, tanto en consultorio como a domicilio. Todos los tratamientos son realizados por profesionales calificados.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">2. Reservas y Cancelaciones</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Las citas se reservan sujeto a disponibilidad.</li>
                        <li>Se requiere un aviso de al menos 24 horas para cancelar o reprogramar una cita sin costo adicional.</li>
                        <li>Nos reservamos el derecho de reprogramar citas en caso de fuerza mayor.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-foreground">3. Responsabilidad</h2>
                    <p>
                        El paciente debe proporcionar información veraz sobre su estado de salud antes de iniciar cualquier tratamiento. Danchin no se hace responsable por complicaciones derivadas de la omisión de información médica relevante por parte del paciente.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">4. Modificaciones</h2>
                    <p>
                        Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en este sitio web.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
