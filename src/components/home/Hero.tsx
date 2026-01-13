import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-automation.jpg';
import heroVideo from '@/assets/video.mp4';

const trustBadges = [
  { icon: CheckCircle, label: 'Entrega Llave en Mano' },
  { icon: Shield, label: 'Enfoque en Seguridad Industrial' },
  { icon: Clock, label: 'Ejecución a Tiempo' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 via-dark-bg/80 to-dark-bg/40" />
      </div>

      {/* Content */}
      <div className="relative container-wide section-padding pt-32 pb-20">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Ingeniería Industrial de Excelencia</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up">
            Ingeniería y Automatización para la{' '}
            <span className="text-primary">Industria Moderna</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-dark-muted leading-relaxed animate-slide-up delay-100">
            Ingeniería eléctrica, PLC y robótica, instalaciones y mantenimiento—entregados
            con seguridad, eficiencia y en los plazos acordados.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
            <Button asChild size="lg" className="btn-primary text-base px-8 py-6 group">
              <Link to="/contacto">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 text-base px-8 py-6">
              <Link to="/proyectos">Ver Proyectos</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 pt-8 animate-slide-up delay-300">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-white/80 text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
