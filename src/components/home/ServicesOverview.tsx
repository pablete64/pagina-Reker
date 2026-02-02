import { Link } from 'react-router-dom';
import {
  Zap,
  Settings,
  Cpu,
  Cable,
  LayoutGrid,
  Truck,
  Wrench,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Proyectos Llave en Mano',
    description: 'Gestión integral de proyectos industriales, desde el diseño inicial hasta la puesta en marcha final.',
    href: '/servicios#llave-en-mano',
  },
  {
    icon: Settings,
    title: 'Ingeniería',
    description: 'Diseño eléctrico, esquemas, estudios técnicos y soporte normativo para sus instalaciones.',
    href: '/servicios#ingenieria',
  },
  {
    icon: Cpu,
    title: 'Automatización (PLC y Robots)',
    description: 'Programación PLC, HMI/SCADA, integración robótica y puesta en marcha de sistemas automatizados.',
    href: '/servicios#automatizacion',
  },
  {
    icon: Cable,
    title: 'Instalaciones Eléctricas',
    description: 'Distribución de potencia, iluminación, canalización de cables e instrumentación industrial.',
    href: '/servicios#instalaciones',
  },
  {
    icon: LayoutGrid,
    title: 'Fabricación de Cuadros',
    description: 'Diseño, ensamblaje y pruebas de cuadros de control y armarios eléctricos a medida.',
    href: '/servicios#cuadros',
  },
  {
    icon: Truck,
    title: 'Reubicaciones',
    description: 'Traslado de maquinaria, células robóticas, desmontaje/reinstalación y revalidación.',
    href: '/servicios#reubicaciones',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Industrial',
    description: 'Mantenimiento preventivo y correctivo, resolución de averías y mejoras continuas.',
    href: '/servicios#mantenimiento',
  },
];

import ParticleRing from '@/components/ui/ParticleRing';

export default function ServicesOverview() {
  return (
    <section className="relative py-24 bg-secondary/10 overflow-hidden">
      <ParticleRing />
      <div className="container-wide section-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Soluciones integrales para la industria
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un amplio catálogo de servicios de ingeniería eléctrica y automatización
            para cubrir todas las necesidades de su planta industrial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center text-primary text-sm font-medium">
                Más información
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
