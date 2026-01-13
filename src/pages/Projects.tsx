import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search, Filter, Tag } from 'lucide-react';
import electricalPanel from '@/assets/electrical-panel.jpg';
import robotics from '@/assets/robotics.jpg';
import heroImage from '@/assets/hero-automation.jpg';

const industries = ['Todos', 'Alimentación', 'Farmacéutico', 'Automoción', 'Logística', 'Manufactura'];

const allProjects = [
  {
    id: 1,
    title: 'Automatización Línea de Envasado',
    summary: 'Sistema completo de automatización PLC para línea de envasado de alta velocidad en planta farmacéutica con integración SCADA.',
    image: electricalPanel,
    industry: 'Farmacéutico',
    serviceType: 'Automatización',
    year: 2024,
    metric: 'Productividad +35%',
  },
  {
    id: 2,
    title: 'Célula Robótica de Paletizado',
    summary: 'Diseño e integración de célula robótica ABB para paletizado automático con visión artificial en sector alimentación.',
    image: robotics,
    industry: 'Alimentación',
    serviceType: 'Automatización',
    year: 2024,
    metric: 'Ciclo reducido 40%',
  },
  {
    id: 3,
    title: 'Cuadros Eléctricos Centro Logístico',
    summary: 'Fabricación de cuadros de distribución y control para nuevo centro logístico automatizado de última generación.',
    image: electricalPanel,
    industry: 'Logística',
    serviceType: 'Fabricación',
    year: 2023,
    metric: 'Entrega récord',
  },
  {
    id: 4,
    title: 'Instalación Planta Automoción',
    summary: 'Instalación eléctrica completa de nueva línea de montaje para fabricante de componentes de automoción.',
    image: heroImage,
    industry: 'Automoción',
    serviceType: 'Instalaciones',
    year: 2023,
    metric: 'Cero incidencias',
  },
  {
    id: 5,
    title: 'Traslado Célula Robótica',
    summary: 'Reubicación completa de célula de soldadura robotizada entre plantas, incluyendo revalidación y optimización.',
    image: robotics,
    industry: 'Automoción',
    serviceType: 'Reubicaciones',
    year: 2024,
    metric: 'Downtime mínimo',
  },
  {
    id: 6,
    title: 'Sistema SCADA Planta Alimentaria',
    summary: 'Desarrollo e implementación de sistema SCADA para monitorización y control de líneas de producción alimentaria.',
    image: electricalPanel,
    industry: 'Alimentación',
    serviceType: 'Automatización',
    year: 2023,
    metric: 'Visibilidad 100%',
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('Todos');

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'Todos' || project.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Proyectos' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Casos de éxito que demuestran nuestra experiencia en ingeniería eléctrica y automatización industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-30">
        <div className="container-wide section-padding">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar proyectos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedIndustry === industry
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container-wide section-padding">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No se encontraron proyectos con los filtros seleccionados.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('Todos');
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {project.industry}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-medium">
                        {project.serviceType}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <Tag className="w-4 h-4" />
                        {project.metric}
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
