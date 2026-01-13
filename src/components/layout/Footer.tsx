import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Empresa', href: '/empresa' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Contacto', href: '/contacto' },
];

const services = [
  { name: 'Proyectos Llave en Mano', href: '/servicios#llave-en-mano' },
  { name: 'Ingeniería', href: '/servicios#ingenieria' },
  { name: 'Automatización', href: '/servicios#automatizacion' },
  { name: 'Instalaciones Eléctricas', href: '/servicios#instalaciones' },
  { name: 'Fabricación de Cuadros', href: '/servicios#cuadros' },
  { name: 'Mantenimiento Industrial', href: '/servicios#mantenimiento' },
];

export default function Footer() {
  return (
    <footer className="dark-section">
      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-white">
                  REKER TECH
                </span>
                <span className="text-xs tracking-widest text-white/70">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-dark-muted text-sm leading-relaxed">
              Ingeniería eléctrica industrial y automatización. Soluciones integrales 
              para la industria moderna con compromiso de calidad y seguridad.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white/70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-white/70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-dark-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-dark-muted hover:text-primary text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-dark-muted text-sm">
                  Polígono Industrial, Calle Principal 123<br />
                  28000 Madrid, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+34900123456" className="text-dark-muted hover:text-primary text-sm transition-colors">
                  +34 900 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@rekertech.com" className="text-dark-muted hover:text-primary text-sm transition-colors">
                  info@rekertech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-muted text-sm">
              © {new Date().getFullYear()} REKER TECH SOLUTIONS. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/privacidad" className="text-dark-muted hover:text-primary text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/cookies" className="text-dark-muted hover:text-primary text-sm transition-colors">
                Cookies
              </Link>
              <Link to="/legal" className="text-dark-muted hover:text-primary text-sm transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
