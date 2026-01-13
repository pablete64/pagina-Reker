import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Tag, CheckCircle, Settings, Calendar } from 'lucide-react';
import electricalPanel from '@/assets/electrical-panel.jpg';
import robotics from '@/assets/robotics.jpg';
import heroImage from '@/assets/hero-automation.jpg';

const projectsData: Record<string, {
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  technologies: string[];
  outcomes: string[];
  images: string[];
  industry: string;
  serviceType: string;
  year: number;
}> = {
  '1': {
    title: 'Automatización Línea de Envasado',
    summary: 'Sistema completo de automatización PLC para línea de envasado de alta velocidad en planta farmacéutica con integración SCADA.',
    challenge: 'El cliente necesitaba modernizar una línea de envasado antigua para aumentar la velocidad de producción manteniendo los estrictos estándares de calidad del sector farmacéutico.',
    solution: 'Diseñamos e implementamos un sistema de control completo basado en PLC Siemens S7-1500 con pantallas HMI y supervisión SCADA, integrando sensores de visión para control de calidad en línea.',
    scope: [
      'Ingeniería de automatización',
      'Programación PLC S7-1500',
      'Desarrollo HMI/SCADA',
      'Integración de visión artificial',
      'Puesta en marcha y validación',
    ],
    technologies: ['Siemens S7-1500', 'WinCC SCADA', 'Cognex Vision', 'ProfiNet'],
    outcomes: [
      'Aumento de productividad del 35%',
      'Reducción de rechazos por defectos en un 50%',
      'Trazabilidad completa del producto',
      'Cumplimiento normativo FDA/EMA',
    ],
    images: [electricalPanel, robotics],
    industry: 'Farmacéutico',
    serviceType: 'Automatización',
    year: 2024,
  },
  '2': {
    title: 'Célula Robótica de Paletizado',
    summary: 'Diseño e integración de célula robótica ABB para paletizado automático con visión artificial en sector alimentación.',
    challenge: 'La empresa requería automatizar el paletizado de productos de distintos formatos y pesos, que hasta entonces se realizaba manualmente con alto coste y baja eficiencia.',
    solution: 'Integramos una célula robótica ABB con sistema de visión para identificación de productos y generación dinámica de patrones de paletizado adaptados a cada referencia.',
    scope: [
      'Diseño de célula robótica',
      'Programación robot ABB',
      'Integración de visión',
      'Diseño de garra multipropósito',
      'Vallado de seguridad',
    ],
    technologies: ['ABB IRB 6700', 'RobotStudio', 'Cognex Vision', 'Safety PLCs'],
    outcomes: [
      'Reducción del ciclo de paletizado en un 40%',
      'Capacidad para 15 formatos diferentes',
      'Cero accidentes laborales',
      'ROI alcanzado en 18 meses',
    ],
    images: [robotics, heroImage],
    industry: 'Alimentación',
    serviceType: 'Automatización',
    year: 2024,
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-background">
          <div className="container-wide section-padding text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Proyecto no encontrado</h1>
            <Button asChild>
              <Link to="/proyectos">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver a proyectos
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide section-padding">
          <Breadcrumbs
            items={[
              { label: 'Proyectos', href: '/proyectos' },
              { label: project.title },
            ]}
          />
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              {project.industry}
            </span>
            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              {project.serviceType}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Images */}
              <div className="grid sm:grid-cols-2 gap-4">
                {project.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title} - imagen ${index + 1}`}
                    className="rounded-xl w-full h-64 object-cover"
                  />
                ))}
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">El Reto</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">La Solución</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Outcomes */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Resultados</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-accent"
                    >
                      <Tag className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Scope */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Alcance del proyecto
                </h3>
                <ul className="space-y-2">
                  {project.scope.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Tecnologías utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary rounded-xl p-6 text-center">
                <h3 className="font-semibold text-primary-foreground mb-2">
                  ¿Tiene un proyecto similar?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Hablemos sobre cómo podemos ayudarle.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/contacto">
                    Contactar
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-8 bg-secondary/30">
        <div className="container-wide section-padding">
          <Button asChild variant="outline">
            <Link to="/proyectos">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver a todos los proyectos
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
