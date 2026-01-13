import { ClipboardList, Lightbulb, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Evaluación y Alcance',
    description: 'Analizamos sus necesidades, requisitos técnicos y objetivos del proyecto para definir el alcance óptimo.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Ingeniería y Diseño',
    description: 'Desarrollamos la ingeniería de detalle, esquemas eléctricos y documentación técnica completa.',
  },
  {
    icon: Hammer,
    step: '03',
    title: 'Fabricación e Instalación',
    description: 'Fabricamos cuadros, realizamos instalaciones eléctricas y montaje de sistemas de automatización.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Puesta en Marcha y Soporte',
    description: 'Realizamos pruebas, puesta en marcha, formación del personal y soporte técnico continuo.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 dark-section">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-4">
            Cómo Trabajamos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Un proceso probado para el éxito
          </h2>
          <p className="text-dark-muted text-lg">
            Seguimos una metodología estructurada que garantiza la calidad, 
            el cumplimiento de plazos y la satisfacción del cliente en cada proyecto.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative bg-dark-card/50 rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.step}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-dark-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
