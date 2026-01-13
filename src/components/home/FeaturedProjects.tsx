import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import electricalPanel from '@/assets/electrical-panel.jpg';
import robotics from '@/assets/robotics.jpg';

const projects = [
  {
    id: 1,
    title: 'Automatización Línea de Envasado',
    summary: 'Sistema completo de automatización PLC para línea de envasado de alta velocidad en planta farmacéutica.',
    image: electricalPanel,
    tags: ['Farmacéutico', 'Automatización'],
    metric: 'Aumento de productividad: +35%',
  },
  {
    id: 2,
    title: 'Célula Robótica de Paletizado',
    summary: 'Diseño e integración de célula robótica para paletizado automático en sector alimentación.',
    image: robotics,
    tags: ['Alimentación', 'Robótica'],
    metric: 'Reducción de tiempos: 40%',
  },
  {
    id: 3,
    title: 'Cuadros Eléctricos Planta Logística',
    summary: 'Fabricación de cuadros de distribución y control para nuevo centro logístico automatizado.',
    image: electricalPanel,
    tags: ['Logística', 'Fabricación'],
    metric: 'Entrega en tiempo récord',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Proyectos Destacados
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Casos de éxito recientes
            </h2>
          </div>
          <Button asChild variant="outline" className="group">
            <Link to="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/proyectos/${project.id}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.summary}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <Tag className="w-4 h-4" />
                  {project.metric}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
