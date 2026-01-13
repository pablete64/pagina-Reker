import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Shield, Award, Target, Lightbulb, Leaf, Users, CheckCircle } from 'lucide-react';
import engineerImage from '@/assets/engineer-work.jpg';

const values = [
  { icon: Shield, title: 'Seguridad', description: 'La seguridad es nuestra prioridad absoluta en cada proyecto.' },
  { icon: Award, title: 'Calidad', description: 'Estándares de excelencia en todos nuestros trabajos y entregables.' },
  { icon: Target, title: 'Fiabilidad', description: 'Cumplimos plazos y compromisos con precisión.' },
  { icon: Lightbulb, title: 'Innovación', description: 'Aplicamos las últimas tecnologías y mejores prácticas.' },
  { icon: Leaf, title: 'Sostenibilidad', description: 'Soluciones eficientes que optimizan el consumo energético.' },
];

const capabilities = [
  'Ingeniería eléctrica industrial',
  'Diseño de instalaciones y cuadros',
  'Programación PLC y SCADA',
  'Integración robótica',
  'Fabricación de cuadros eléctricos',
  'Instalaciones en planta',
  'Puesta en marcha y validación',
  'Mantenimiento preventivo y correctivo',
];

const team = [
  { role: 'Director Técnico', description: 'Liderazgo en ingeniería y proyectos' },
  { role: 'Jefe de Automatización', description: 'Experto en PLC, HMI y robótica' },
  { role: 'Responsable de Instalaciones', description: 'Coordinación de montajes en planta' },
  { role: 'Jefe de Fabricación', description: 'Gestión de taller de cuadros' },
];

export default function Company() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Empresa' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ingeniería Industrial de Excelencia
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En REKER TECH SOLUTIONS combinamos décadas de experiencia con tecnología de vanguardia 
              para ofrecer soluciones eléctricas y de automatización que impulsan la productividad industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Nuestra Misión
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Transformar la industria con soluciones técnicas de primer nivel
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nuestra misión es ser el socio tecnológico de referencia para empresas industriales 
                que buscan optimizar sus procesos mediante la automatización, la eficiencia energética 
                y las instalaciones eléctricas de alta calidad.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos en estrecha colaboración con cada cliente para entender sus necesidades 
                específicas y desarrollar soluciones a medida que superen sus expectativas.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={engineerImage}
                alt="Equipo de ingeniería trabajando"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 dark-section">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-dark-muted text-lg">
              Principios que guían cada decisión y cada proyecto que realizamos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark-card/50 rounded-xl p-6 border border-white/5 text-center hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-dark-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Capacidades
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Experiencia técnica integral
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contamos con un equipo multidisciplinar capaz de abordar proyectos 
                de cualquier complejidad, desde el diseño hasta la ejecución final.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Calidad y Seguridad
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Compromiso con la excelencia
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Nuestros procesos internos están diseñados para garantizar la máxima 
                calidad y seguridad en cada fase del proyecto.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Protocolos de seguridad</h4>
                    <p className="text-muted-foreground text-sm">
                      Aplicamos estrictos protocolos de seguridad laboral en todas las intervenciones.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Control de calidad</h4>
                    <p className="text-muted-foreground text-sm">
                      Verificación exhaustiva de cada entregable antes de la puesta en servicio.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Mejora continua</h4>
                    <p className="text-muted-foreground text-sm">
                      Revisamos y optimizamos nuestros procesos de forma constante.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Equipo
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Profesionales comprometidos
            </h2>
            <p className="text-muted-foreground text-lg">
              Un equipo de ingenieros y técnicos especializados en cada área.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.role}</h3>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-background">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Compromiso con la Sostenibilidad
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Diseñamos e implementamos soluciones que optimizan el consumo energético, 
              reducen el impacto ambiental y contribuyen a una industria más sostenible. 
              Nuestros sistemas de control inteligente permiten monitorizar y ajustar 
              el uso de recursos en tiempo real.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
