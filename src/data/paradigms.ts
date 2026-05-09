import {
  BookOpen,
  Zap,
  Brain,
  Blocks,
  Users,
  Heart,
  Search,
  Network
} from 'lucide-react';
import React from 'react';

export type ParadigmApproach = 
  | 'docente-centrista'
  | 'estudiante-centrista'
  | 'social-cultural'
  | 'tecnológico'
  | 'crítico-transformador';

export interface Paradigm {
  id: string;
  number: number;
  name: string;
  period: string;
  centralIdea: string;
  keywords: string[];
  characteristics: string[];
  authors: string[];
  teacherRole: string;
  studentRole: string;
  currentApplication: string[];
  classroomExample: string;
  synthesis: string;
  color: string;
  bgGradient: string;
  icon: React.ComponentType<any>;
  approach: ParadigmApproach[];
  imageUrl: string;
}

export const paradigmsData: Paradigm[] = [
  {
    id: 'tradicional',
    number: 1,
    name: 'Paradigma Tradicional',
    period: 'Siglos XVII–XIX',
    centralIdea: 'El conocimiento se transmite del docente al estudiante.',
    keywords: ['Transmisión', 'Memoria', 'Disciplina'],
    characteristics: [
      'Docente como autoridad',
      'Estudiante pasivo',
      'Memorización y disciplina',
      'Repetición',
      'Evaluación centrada en contenidos'
    ],
    authors: ['Juan Amos Comenio', 'Johann Friedrich Herbart', 'Émile Durkheim'],
    teacherRole: 'Transmisor y autoridad única del conocimiento.',
    studentRole: 'Receptor pasivo, memorizador.',
    currentApplication: [
      'Clases magistrales',
      'Explicación directa',
      'Uso de pizarra',
      'Organización secuencial de contenidos',
      'Evaluaciones escritas'
    ],
    classroomExample: 'El docente explica un tema, los estudiantes copian, memorizan y responden una prueba.',
    synthesis: 'El conocimiento se transmite; el estudiante lo recibe.',
    color: '#d97706', // Ámbar oscuro
    bgGradient: 'from-amber-600 to-yellow-500',
    icon: BookOpen,
    approach: ['docente-centrista'],
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'conductista',
    number: 2,
    name: 'Paradigma Conductista',
    period: 'Inicios y mediados del siglo XX',
    centralIdea: 'El aprendizaje es un cambio observable de conducta mediante estímulos, respuestas y refuerzos.',
    keywords: ['Conducta', 'Estímulo', 'Refuerzo'],
    characteristics: [
      'Repetición y refuerzo positivo',
      'Premios y castigos',
      'Objetivos medibles',
      'Práctica dirigida',
      'Evaluación objetiva'
    ],
    authors: ['Ivan Pavlov', 'John B. Watson', 'Edward Thorndike', 'B. F. Skinner'],
    teacherRole: 'Ingeniero del aprendizaje, diseña estímulos y refuerzos.',
    studentRole: 'Ser reactivo y moldeable por el entorno.',
    currentApplication: [
      'Gamificación',
      'Puntos e insignias',
      'Rúbricas',
      'Retroalimentación inmediata',
      'Ejercicios de automatización'
    ],
    classroomExample: 'Los estudiantes resuelven ejercicios y reciben puntos o recompensas por respuestas correctas.',
    synthesis: 'Aprender es modificar la conducta mediante estímulos y refuerzos.',
    color: '#ea580c', // Naranja oscuro
    bgGradient: 'from-orange-500 to-orange-400',
    icon: Zap,
    approach: ['docente-centrista'],
    imageUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cognitivista',
    number: 3,
    name: 'Paradigma Cognitivista',
    period: 'Desde mediados del siglo XX',
    centralIdea: 'El aprendizaje ocurre mediante procesos mentales internos.',
    keywords: ['Procesos', 'Esquemas', 'Metacognición'],
    characteristics: [
      'Atención y memoria',
      'Percepción y comprensión',
      'Procesamiento de información',
      'Esquemas mentales',
      'Metacognición'
    ],
    authors: ['Jean Piaget', 'Jerome Bruner', 'David Ausubel', 'Robert Gagné'],
    teacherRole: 'Guía y estructurador de la información.',
    studentRole: 'Procesador activo de información.',
    currentApplication: [
      'Mapas conceptuales',
      'Organizadores gráficos',
      'Estrategias de memoria',
      'Resolución de problemas',
      'Activación de saberes previos'
    ],
    classroomExample: 'El docente utiliza esquemas visuales para ayudar a los estudiantes a organizar y comprender un concepto.',
    synthesis: 'Aprender es procesar, organizar y transformar información.',
    color: '#2563eb', // Azul oscuro
    bgGradient: 'from-blue-600 to-blue-400',
    icon: Brain,
    approach: ['estudiante-centrista'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'constructivista',
    number: 4,
    name: 'Paradigma Constructivista',
    period: 'Segunda mitad del siglo XX hasta la actualidad',
    centralIdea: 'El estudiante construye activamente su conocimiento a partir de experiencias y saberes previos.',
    keywords: ['Construcción', 'Experiencia', 'Protagonista'],
    characteristics: [
      'Aprendizaje activo',
      'Construcción del conocimiento',
      'Error como oportunidad',
      'Resolución de problemas',
      'Docente mediador',
      'Estudiante protagonista'
    ],
    authors: ['Jean Piaget', 'Lev Vygotsky', 'Jerome Bruner', 'David Ausubel'],
    teacherRole: 'Mediador que diseña experiencias para facilitar la construcción mental.',
    studentRole: 'Constructor autónomo de sus saberes.',
    currentApplication: [
      'Aprendizaje basado en proyectos',
      'Aprendizaje cooperativo',
      'Proyectos STEAM',
      'Resolución de problemas reales'
    ],
    classroomExample: 'Los estudiantes construyen una maqueta, simulación o producto para explicar un fenómeno físico, matemático o social.',
    synthesis: 'El conocimiento no se copia: se construye.',
    color: '#059669', // Verde oscuro
    bgGradient: 'from-emerald-500 to-emerald-400',
    icon: Blocks,
    approach: ['estudiante-centrista'],
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'sociocultural',
    number: 5,
    name: 'Paradigma Sociocultural',
    period: 'Siglo XX hasta la actualidad',
    centralIdea: 'El aprendizaje se desarrolla mediante la interacción social, el lenguaje, la cultura y la mediación.',
    keywords: ['Comunidad', 'Cultura', 'Mediación'],
    characteristics: [
      'Zona de desarrollo próximo',
      'Colaboración y diálogo',
      'Mediación docente',
      'Contexto cultural',
      'Aprendizaje situado'
    ],
    authors: ['Lev Vygotsky', 'Alexander Luria', 'Barbara Rogoff', 'James Wertsch'],
    teacherRole: 'Mediador cultural que andamia saberes a través de la interacción.',
    studentRole: 'Ser social que aprende en comunidad.',
    currentApplication: [
      'Aprendizaje colaborativo',
      'Educación intercultural',
      'Trabajo en equipo',
      'Proyectos comunitarios',
      'Problemas contextualizados'
    ],
    classroomExample: 'Los estudiantes resuelven un problema vinculado a su comunidad mediante diálogo, colaboración y orientación docente.',
    synthesis: 'Aprendemos con otros, desde la cultura y el contexto.',
    color: '#7c3aed', // Violeta oscuro
    bgGradient: 'from-purple-600 to-indigo-400',
    icon: Users,
    approach: ['social-cultural'],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'humanista',
    number: 6,
    name: 'Paradigma Humanista',
    period: 'Segunda mitad del siglo XX hasta la actualidad',
    centralIdea: 'La educación debe formar personas integrales, autónomas, libres y emocionalmente desarrolladas.',
    keywords: ['Integral', 'Emoción', 'Autonomía'],
    characteristics: [
      'Autoestima y autonomía',
      'Emociones y libertad responsable',
      'Clima afectivo',
      'Sentido personal',
      'Desarrollo integral'
    ],
    authors: ['Carl Rogers', 'Abraham Maslow', 'Paulo Freire', 'Erich Fromm'],
    teacherRole: 'Facilitador empático que promueve la autorrealización.',
    studentRole: 'Persona única e integral, con intereses y emociones propias.',
    currentApplication: [
      'Tutoría',
      'Educación emocional',
      'Orientación vocacional',
      'Aprendizaje socioemocional',
      'Acompañamiento personal'
    ],
    classroomExample: 'El docente relaciona el contenido con la vida, emociones, metas y proyecto personal del estudiante.',
    synthesis: 'Educar es acompañar el desarrollo humano.',
    color: '#db2777', // Rosa oscuro
    bgGradient: 'from-pink-500 to-rose-400',
    icon: Heart,
    approach: ['estudiante-centrista', 'social-cultural'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'critico',
    number: 7,
    name: 'Paradigma Crítico',
    period: 'Segunda mitad del siglo XX hasta la actualidad',
    centralIdea: 'La educación debe formar sujetos críticos capaces de cuestionar y transformar la realidad.',
    keywords: ['Crítica', 'Transformación', 'Justicia'],
    characteristics: [
      'Pensamiento crítico',
      'Conciencia social',
      'Diálogo y problematización',
      'Justicia social',
      'Participación democrática'
    ],
    authors: ['Paulo Freire', 'Henry Giroux', 'Peter McLaren', 'Jürgen Habermas'],
    teacherRole: 'Intelectual transformativo que cuestiona estructuras.',
    studentRole: 'Agente de cambio cívico y emancipador.',
    currentApplication: [
      'Debates',
      'Análisis de problemas sociales',
      'Aprendizaje-servicio',
      'Educación ambiental',
      'Investigación escolar'
    ],
    classroomExample: 'Los estudiantes analizan la contaminación de un río local, investigan causas y proponen soluciones comunitarias.',
    synthesis: 'Educar es leer el mundo para transformarlo.',
    color: '#dc2626', // Rojo oscuro
    bgGradient: 'from-red-600 to-red-400',
    icon: Search,
    approach: ['crítico-transformador', 'social-cultural'],
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'conectivista',
    number: 8,
    name: 'Paradigma Conectivista',
    period: 'Siglo XXI',
    centralIdea: 'El aprendizaje ocurre en redes digitales, conexiones de conocimiento, tecnología e inteligencia colectiva.',
    keywords: ['Red', 'Conexión', 'Tecnología'],
    characteristics: [
      'Aprendizaje en red',
      'Tecnología educativa',
      'Autonomía',
      'Actualización permanente',
      'Comunidades virtuales',
      'Recursos abiertos'
    ],
    authors: ['George Siemens', 'Stephen Downes'],
    teacherRole: 'Curador de redes y facilitador de conexiones digitales.',
    studentRole: 'Nodo activo estructurador y validador de conexiones informativas.',
    currentApplication: [
      'Inteligencia artificial educativa',
      'Plataformas virtuales',
      'Cursos en línea',
      'Aprendizaje móvil',
      'Comunidades digitales'
    ],
    classroomExample: 'Los estudiantes investigan en línea, colaboran digitalmente y crean productos interactivos usando tecnología.',
    synthesis: 'Aprender es conectar información, personas y tecnología.',
    color: '#0891b2', // Celeste oscuro
    bgGradient: 'from-cyan-500 to-teal-400',
    icon: Network,
    approach: ['tecnológico', 'estudiante-centrista'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
  }
];
