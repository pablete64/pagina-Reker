import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Zap, Settings, Cpu, Cable, LayoutGrid, Truck, Wrench,
  ArrowRight, CheckCircle, MessageSquare
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  {
    id: 'llave-en-mano',
    icon: Zap,
    title: 'Proyectos Llave en Mano',
    subtitle: 'Gestión integral de principio a fin',
    description: 'Nos encargamos de todo el ciclo de vida del proyecto: desde la conceptualización y el diseño, pasando por la fabricación y montaje, hasta la puesta en marcha y el soporte posterior.',
    includes: [
      'Estudio de viabilidad y alcance',
      'Ingeniería básica y de detalle',
      'Gestión de compras y aprovisionamiento',
      'Fabricación de cuadros y sistemas',
      'Instalación y montaje en planta',
      'Puesta en marcha y validación',
      'Formación del personal operativo',
    ],
    deliverables: ['Proyecto completo documentado', 'Sistema funcionando', 'Manuales de operación', 'Certificados de conformidad'],
    applications: ['Nuevas líneas de producción', 'Ampliaciones de planta', 'Modernización de instalaciones'],
  },
  {
    id: 'ingenieria',
    icon: Settings,
    title: 'Ingeniería',
    subtitle: 'Diseño eléctrico y estudios técnicos',
    description: 'Desarrollamos la ingeniería eléctrica y de automatización para sus proyectos, con esquemas detallados, cálculos justificativos y documentación técnica completa.',
    includes: [
      'Diseño de arquitectura eléctrica',
      'Esquemas unifilares y multifilares',
      'Cálculos de dimensionamiento',
      'Selección de equipos y materiales',
      'Estudios de seguridad eléctrica',
      'Documentación as-built',
    ],
    deliverables: ['Memorias técnicas', 'Esquemas eléctricos', 'Listados de materiales', 'Planos de implantación'],
    applications: ['Proyectos nuevos', 'Legalizaciones', 'Auditorías técnicas', 'Ampliaciones'],
  },
  {
    id: 'automatizacion',
    icon: Cpu,
    title: 'Automatización (PLC y Robots)',
    subtitle: 'Control inteligente de procesos',
    description: 'Programamos y ponemos en marcha sistemas de automatización industrial: PLCs, HMIs, sistemas SCADA y células robóticas integradas.',
    includes: [
      'Programación de PLCs (Siemens, Allen-Bradley, etc.)',
      'Diseño de pantallas HMI',
      'Desarrollo de sistemas SCADA',
      'Integración de robots industriales',
      'Comunicaciones industriales',
      'Puesta en marcha y ajustes',
    ],
    deliverables: ['Programas PLC documentados', 'Proyectos HMI/SCADA', 'Manuales de operación', 'Backup de programas'],
    applications: ['Líneas de producción', 'Células robotizadas', 'Sistemas de control de procesos'],
  },
  {
    id: 'instalaciones',
    icon: Cable,
    title: 'Instalaciones Eléctricas',
    subtitle: 'Ejecución de instalaciones industriales',
    description: 'Realizamos instalaciones eléctricas industriales de alta y baja tensión, incluyendo distribución de potencia, iluminación, cableado y bandejas.',
    includes: [
      'Cuadros de distribución',
      'Canalizaciones y bandejas',
      'Cableado de potencia y control',
      'Instalaciones de alumbrado',
      'Puestas a tierra',
      'Instrumentación de campo',
    ],
    deliverables: ['Instalación terminada', 'Protocolos de pruebas', 'Certificados de instalación', 'Planos as-built'],
    applications: ['Nuevas plantas', 'Ampliaciones', 'Reformas industriales'],
  },
  {
    id: 'cuadros',
    icon: LayoutGrid,
    title: 'Fabricación de Cuadros',
    subtitle: 'Diseño y montaje de cuadros eléctricos',
    description: 'Diseñamos, fabricamos y probamos cuadros de control, CCMs y armarios eléctricos a medida en nuestro taller propio.',
    includes: [
      'Diseño mecánico y eléctrico',
      'Montaje y cableado',
      'Programación de protecciones',
      'Pruebas FAT',
      'Documentación técnica',
      'Transporte e instalación',
    ],
    deliverables: ['Cuadros listos para instalar', 'Protocolos de prueba FAT', 'Esquemas as-built', 'Certificados'],
    applications: ['CCMs', 'Cuadros de control', 'Armarios de automatización', 'Cuadros de distribución'],
  },
  {
    id: 'reubicaciones',
    icon: Truck,
    title: 'Reubicaciones',
    subtitle: 'Traslado de maquinaria y células',
    description: 'Gestionamos el traslado de equipos industriales, células robóticas y líneas completas, incluyendo desmontaje, transporte, reinstalación y puesta en marcha.',
    includes: [
      'Planificación del traslado',
      'Desmontaje seguro de equipos',
      'Gestión logística',
      'Reinstalación en destino',
      'Reconexión eléctrica y neumática',
      'Puesta en marcha y validación',
    ],
    deliverables: ['Equipo operativo en nueva ubicación', 'Protocolos de validación', 'Documentación actualizada'],
    applications: ['Traslados de planta', 'Reorganización de layout', 'Reubicación de células robóticas'],
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    title: 'Mantenimiento Industrial',
    subtitle: 'Mantenimiento preventivo y correctivo',
    description: 'Ofrecemos servicios de mantenimiento industrial para garantizar la disponibilidad y el rendimiento óptimo de sus instalaciones eléctricas y sistemas de automatización.',
    includes: [
      'Mantenimiento preventivo programado',
      'Reparación de averías',
      'Diagnóstico y resolución de problemas',
      'Mejoras y optimizaciones',
      'Soporte técnico remoto',
      'Guardias y servicio 24/7',
    ],
    deliverables: ['Informes de mantenimiento', 'Historial de intervenciones', 'Recomendaciones de mejora'],
    applications: ['Plantas industriales', 'Líneas de producción', 'Sistemas de automatización'],
  },
];

const faqs = [
  {
    question: '¿Qué marcas de PLC programáis?',
    answer: 'Trabajamos con las principales marcas del mercado: Siemens (S7-1200, S7-1500), Allen-Bradley (ControlLogix, CompactLogix), Schneider, Omron, Beckhoff, entre otras.',
  },
  {
    question: '¿Trabajáis en toda España?',
    answer: 'Sí, realizamos proyectos en todo el territorio nacional. Contamos con equipos móviles para instalaciones y puesta en marcha in situ.',
  },
  {
    question: '¿Ofrecéis servicio de urgencias?',
    answer: 'Sí, disponemos de un servicio de guardia para atender averías críticas y garantizar la continuidad de la producción de nuestros clientes.',
  },
  {
    question: '¿Qué plazo tienen los proyectos típicos?',
    answer: 'Los plazos varían según el alcance. Un cuadro de control puede estar listo en 3-4 semanas, mientras que un proyecto llave en mano puede requerir varios meses.',
  },
  {
    question: '¿Proporcionáis formación?',
    answer: 'Sí, incluimos formación para el personal de operación y mantenimiento como parte de nuestros proyectos de automatización e instalación.',
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Servicios' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soluciones completas de ingeniería eléctrica y automatización industrial 
              para cubrir todas las necesidades de su planta.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container-wide section-padding space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-primary font-medium">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Button asChild className="btn-primary group">
                  <Link to="/contacto">
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Hablar con un Ingeniero
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">¿Qué incluye?</h3>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-xl p-5">
                    <h4 className="font-medium text-foreground mb-3 text-sm">Entregables típicos</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-5">
                    <h4 className="font-medium text-foreground mb-3 text-sm">Aplicaciones</h4>
                    <ul className="space-y-1">
                      {service.applications.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground text-lg">
                Respuestas a las dudas más habituales sobre nuestros servicios.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
