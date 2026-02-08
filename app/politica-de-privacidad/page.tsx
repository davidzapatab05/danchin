import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function PrivacyPolicy() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-foreground">Política de Privacidad</h1>

                <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>
                        En <strong>Danchin Fisioterapia & Bienestar</strong>, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad describe cómo recopilamos, usamos y compartimos su información cuando utiliza nuestros servicios.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">1. Recopilación de Información</h2>
                    <p>
                        Recopilamos información que usted nos proporciona directamente, como su nombre, número de teléfono y detalles sobre su condición física cuando reserva una cita o se comunica con nosotros a través de WhatsApp.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">2. Uso de la Información</h2>
                    <p>
                        Utilizamos la información recopilada para:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Programar y gestionar sus citas de fisioterapia.</li>
                        <li>Comunicarnos con usted sobre sus tratamientos y recordatorios de citas.</li>
                        <li>Mejorar nuestros servicios y la experiencia del cliente.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-foreground">3. Protección de Datos</h2>
                    <p>
                        Implementamos medidas de seguridad razonables para proteger su información personal contra el acceso, uso o divulgación no autorizados. Su historial clínico es tratado con estricta confidencialidad.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">4. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos a través de nuestro número de atención al cliente: <strong>+51 936 000 728</strong>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
