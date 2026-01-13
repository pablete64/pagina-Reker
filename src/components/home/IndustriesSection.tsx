import { UtensilsCrossed, Pill, Car, Factory, Package } from 'lucide-react';

const industries = [
  { icon: UtensilsCrossed, name: 'Alimentación', description: 'Procesos y líneas de producción alimentaria' },
  { icon: Pill, name: 'Farmacéutico', description: 'Instalaciones reguladas y salas limpias' },
  { icon: Car, name: 'Automoción', description: 'Líneas de montaje y robótica avanzada' },
  { icon: Factory, name: 'Manufactura', description: 'Plantas de producción industrial' },
  { icon: Package, name: 'Logística', description: 'Almacenes automatizados y distribución' },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Sectores
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experiencia en múltiples industrias
          </h2>
          <p className="text-muted-foreground text-lg">
            Nuestro equipo tiene amplia experiencia trabajando en diversos sectores industriales, 
            adaptando soluciones a las necesidades específicas de cada uno.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <industry.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
              <p className="text-muted-foreground text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
