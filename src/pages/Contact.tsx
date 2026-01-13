import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, 
  MessageSquare, Calendar, FileText 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const serviceOptions = [
  'Proyectos Llave en Mano',
  'Ingeniería',
  'Automatización (PLC y Robots)',
  'Instalaciones Eléctricas',
  'Fabricación de Cuadros',
  'Reubicaciones',
  'Mantenimiento Industrial',
  'Otro',
];

const nextSteps = [
  { icon: MessageSquare, title: 'Respuesta en 24h', description: 'Nos pondremos en contacto con usted en 1 día laborable.' },
  { icon: Calendar, title: 'Llamada de descubrimiento', description: 'Programaremos una llamada para entender sus necesidades.' },
  { icon: FileText, title: 'Propuesta personalizada', description: 'Recibirá una propuesta técnica y económica detallada.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: '¡Mensaje enviado!',
      description: 'Nos pondremos en contacto con usted lo antes posible.',
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Contacto' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contacte con Nosotros
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ¿Tiene un proyecto en mente? Cuéntenos sus necesidades y le ofreceremos 
              la mejor solución técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envíenos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      placeholder="Su nombre"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Nombre de la empresa"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="su@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Servicio de interés</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange('service', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntenos sobre su proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Dirección</h3>
                      <p className="text-muted-foreground">
                        Polígono Industrial, Calle Principal 123<br />
                        28000 Madrid, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Teléfono</h3>
                      <a href="tel:+34900123456" className="text-primary hover:underline">
                        +34 900 123 456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a href="mailto:info@rekertech.com" className="text-primary hover:underline">
                        info@rekertech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Horario</h3>
                      <p className="text-muted-foreground">
                        Lunes - Viernes: 8:00 - 18:00<br />
                        Sábados: 9:00 - 13:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden bg-secondary h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16 bg-secondary/30">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            ¿Qué pasa después?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
