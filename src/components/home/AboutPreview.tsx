import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import engineerImage from '@/assets/engineer-work.jpg';

export default function AboutPreview() {
  const sectors = [
    'Alimentación y Bebidas',
    'Farmacéutico',
    'Automoción',
    'Manufactura General',
    'Logística',
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={engineerImage}
                alt="Ingeniero trabajando en instalación eléctrica"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-xl border border-border">
              <div className="text-4xl font-bold text-primary">+500</div>
              <div className="text-muted-foreground text-sm">Proyectos completados</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Décadas de experiencia en ingeniería industrial
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En REKER TECH SOLUTIONS, combinamos experiencia técnica con innovación 
              para ofrecer soluciones eléctricas y de automatización de la más alta calidad. 
              Nuestro equipo de ingenieros especializados trabaja en estrecha colaboración 
              con cada cliente para garantizar resultados excepcionales.
            </p>
            
            {/* Sectors */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Sectores que servimos:</h3>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <Button asChild className="btn-primary group mt-4">
              <Link to="/empresa">
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
