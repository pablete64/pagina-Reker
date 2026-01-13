// Centralized search data for Services and Projects

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'project';
  url: string;
  tags: string[];
}

export const servicesSearchData: SearchResult[] = [
  {
    id: 'llave-en-mano',
    title: 'Proyectos Llave en Mano',
    description: 'Gestión integral de principio a fin. Nos encargamos de todo el ciclo de vida del proyecto.',
    type: 'service',
    url: '/servicios#llave-en-mano',
    tags: ['llave en mano', 'gestión', 'integral', 'proyecto', 'turnkey'],
  },
  {
    id: 'ingenieria',
    title: 'Ingeniería',
    description: 'Diseño eléctrico y estudios técnicos. Desarrollamos la ingeniería eléctrica y de automatización.',
    type: 'service',
    url: '/servicios#ingenieria',
    tags: ['ingeniería', 'diseño', 'eléctrico', 'estudios', 'engineering'],
  },
  {
    id: 'automatizacion',
    title: 'Automatización (PLC y Robots)',
    description: 'Control inteligente de procesos. Programamos PLCs, HMIs, sistemas SCADA y células robóticas.',
    type: 'service',
    url: '/servicios#automatizacion',
    tags: ['automatización', 'automation', 'PLC', 'robot', 'robots', 'SCADA', 'HMI', 'Siemens', 'Allen-Bradley'],
  },
  {
    id: 'instalaciones',
    title: 'Instalaciones Eléctricas',
    description: 'Ejecución de instalaciones industriales de alta y baja tensión.',
    type: 'service',
    url: '/servicios#instalaciones',
    tags: ['instalaciones', 'installations', 'eléctrica', 'cableado', 'potencia', 'baja tensión', 'alta tensión'],
  },
  {
    id: 'cuadros',
    title: 'Fabricación de Cuadros',
    description: 'Diseño y montaje de cuadros eléctricos. Cuadros de control, CCMs y armarios eléctricos.',
    type: 'service',
    url: '/servicios#cuadros',
    tags: ['cuadros', 'panels', 'paneles', 'armarios', 'CCM', 'fabricación', 'montaje'],
  },
  {
    id: 'reubicaciones',
    title: 'Reubicaciones',
    description: 'Traslado de maquinaria y células. Desmontaje, transporte, reinstalación y puesta en marcha.',
    type: 'service',
    url: '/servicios#reubicaciones',
    tags: ['reubicaciones', 'traslado', 'maquinaria', 'células', 'relocations'],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Industrial',
    description: 'Mantenimiento preventivo y correctivo para instalaciones eléctricas y automatización.',
    type: 'service',
    url: '/servicios#mantenimiento',
    tags: ['mantenimiento', 'maintenance', 'preventivo', 'correctivo', 'reparación', 'averías'],
  },
];

export const projectsSearchData: SearchResult[] = [
  {
    id: '1',
    title: 'Automatización Línea de Envasado',
    description: 'Sistema completo de automatización PLC para línea de envasado de alta velocidad en planta farmacéutica con integración SCADA.',
    type: 'project',
    url: '/proyectos/1',
    tags: ['automatización', 'PLC', 'envasado', 'farmacéutico', 'SCADA'],
  },
  {
    id: '2',
    title: 'Célula Robótica de Paletizado',
    description: 'Diseño e integración de célula robótica ABB para paletizado automático con visión artificial en sector alimentación.',
    type: 'project',
    url: '/proyectos/2',
    tags: ['robot', 'robótica', 'paletizado', 'ABB', 'visión artificial', 'alimentación'],
  },
  {
    id: '3',
    title: 'Cuadros Eléctricos Centro Logístico',
    description: 'Fabricación de cuadros de distribución y control para nuevo centro logístico automatizado de última generación.',
    type: 'project',
    url: '/proyectos/3',
    tags: ['cuadros', 'paneles', 'logística', 'distribución', 'control'],
  },
  {
    id: '4',
    title: 'Instalación Planta Automoción',
    description: 'Instalación eléctrica completa de nueva línea de montaje para fabricante de componentes de automoción.',
    type: 'project',
    url: '/proyectos/4',
    tags: ['instalación', 'automoción', 'automotive', 'montaje', 'eléctrica'],
  },
  {
    id: '5',
    title: 'Traslado Célula Robótica',
    description: 'Reubicación completa de célula de soldadura robotizada entre plantas, incluyendo revalidación y optimización.',
    type: 'project',
    url: '/proyectos/5',
    tags: ['traslado', 'reubicación', 'robot', 'soldadura', 'automoción'],
  },
  {
    id: '6',
    title: 'Sistema SCADA Planta Alimentaria',
    description: 'Desarrollo e implementación de sistema SCADA para monitorización y control de líneas de producción alimentaria.',
    type: 'project',
    url: '/proyectos/6',
    tags: ['SCADA', 'alimentación', 'monitorización', 'control', 'producción'],
  },
];

export const allSearchData: SearchResult[] = [...servicesSearchData, ...projectsSearchData];

export function searchContent(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const queryTerms = normalizedQuery.split(/\s+/);
  
  return allSearchData.filter((item) => {
    const searchableText = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
    return queryTerms.some((term) => searchableText.includes(term));
  }).sort((a, b) => {
    // Prioritize title matches
    const aInTitle = a.title.toLowerCase().includes(normalizedQuery);
    const bInTitle = b.title.toLowerCase().includes(normalizedQuery);
    if (aInTitle && !bInTitle) return -1;
    if (!aInTitle && bInTitle) return 1;
    return 0;
  });
}
