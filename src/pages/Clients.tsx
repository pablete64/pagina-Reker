import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote, CheckCircle, Star } from 'lucide-react';

const clients = [
  { name: 'Empresa Alimentaria SA', industry: 'Alimentación' },
  { name: 'Farmacéuticos Ibéricos', industry: 'Farmacéutico' },
  { name: 'AutoParts Manufacturing', industry: 'Automoción' },
  { name: 'Logística Express', industry: 'Logística' },
  { name: 'Industrias Generales', industry: 'Manufactura' },
  { name: 'Pharma Solutions', industry: 'Farmacéutico' },
  { name: 'Food Processing Co', industry: 'Alimentación' },
  { name: 'Metal Components SA', industry: 'Automoción' },
];

const testimonials = [
  {
    quote: 'REKER TECH SOLUTIONS demostró un nivel técnico excepcional en la automatización de nuestra línea de producción. El proyecto se entregó en plazo y superó nuestras expectativas.',
    author: 'Director de Producción',
    company: 'Empresa del sector alimentario',
    rating: 5,
  },
  {
    quote: 'Su equipo de ingenieros resolvió problemas complejos de integración robótica que otros proveedores no habían conseguido. Muy recomendables.',
    author: 'Jefe de Mantenimiento',
    company: 'Empresa del sector automoción',
    rating: 5,
  },
  {
    quote: 'La calidad de los cuadros eléctricos fabricados y la documentación técnica entregada fue impecable. Ya estamos planificando nuevos proyectos con ellos.',
    author: 'Responsable de Ingeniería',
    company: 'Empresa del sector logístico',
    rating: 5,
  },
  {
    quote: 'Excelente servicio de mantenimiento. Respuesta rápida a las incidencias y personal muy cualificado. Han reducido significativamente nuestros tiempos de parada.',
    author: 'Director de Operaciones',
    company: 'Empresa farmacéutica',
    rating: 5,
  },
];

const reasons = [
  'Respuesta rápida ante cualquier consulta o incidencia',
  'Equipo técnico altamente cualificado y experimentado',
  'Documentación completa y detallada en cada proyecto',
  'Soporte durante la puesta en marcha y formación del personal',
  'Cumplimiento riguroso de plazos y presupuestos',
  'Soluciones personalizadas a las necesidades de cada cliente',
];

export default function Clients() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Clientes' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nuestros Clientes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empresas industriales de toda España confían en nosotros para sus proyectos 
              de ingeniería eléctrica y automatización.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-background">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            Confían en nosotros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-foreground font-medium text-center text-sm">
                  {client.name}
                </span>
                <span className="text-muted-foreground text-xs mt-1">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 dark-section">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-dark-muted text-lg">
              Opiniones reales de empresas con las que hemos trabajado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark-card/50 rounded-2xl p-8 border border-white/5"
              >
                <Quote className="w-10 h-10 text-primary/50 mb-4" />
                <p className="text-dark-text text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-dark-muted text-sm">{testimonial.company}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                ¿Por qué elegirnos?
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Razones para trabajar con REKER TECH SOLUTIONS
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nuestro compromiso con la excelencia técnica y el servicio al cliente 
                nos diferencia en el sector de la ingeniería industrial.
              </p>
              <Button asChild className="btn-primary group">
                <Link to="/contacto">
                  Empieza un proyecto con nosotros
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
