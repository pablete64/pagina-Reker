import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTABand() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-wide section-padding">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
              ¿Tiene un proyecto complejo?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Hablemos sobre cómo podemos ayudarle a alcanzar sus objetivos industriales.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 group shadow-lg"
          >
            <Link to="/contacto">
              Contactar con nosotros
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
