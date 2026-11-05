export type WordEntry = {
  word: string
  translation: string
  category: string
  question: string
  questionTranslation: string
}

export const MAX_ERRORS = 6

export const WORD_BANK: WordEntry[] = [
  {
    word: 'API',
    translation: 'Interfaz de programación de aplicaciones',
    category: 'Arquitectura',
    question: 'What allows two different software applications to communicate with each other?',
    questionTranslation: '¿Qué permite que dos aplicaciones de software diferentes se comuniquen entre sí?',
  },
  {
    word: 'CACHE',
    translation: 'Memoria caché',
    category: 'Rendimiento',
    question: 'What stores frequently used data so it can be accessed faster?',
    questionTranslation: '¿Qué almacena datos de uso frecuente para acceder a ellos más rápido?',
  },
  {
    word: 'CONTAINERIZATION',
    translation: 'Contenerización',
    category: 'DevOps',
    question: 'What packages an application with everything it needs to run consistently?',
    questionTranslation: '¿Qué empaqueta una aplicación con todo lo necesario para ejecutarse de forma consistente?',
  },
  {
    word: 'FRAMEWORK',
    translation: 'Marco de trabajo',
    category: 'Desarrollo',
    question: 'What reusable structure helps developers build software more efficiently?',
    questionTranslation: '¿Qué estructura reutilizable ayuda a los desarrolladores a crear software con mayor eficiencia?',
  },
  {
    word: 'MICROSERVICES',
    translation: 'Microservicios',
    category: 'Arquitectura',
    question: 'What architectural style divides an application into small independent services?',
    questionTranslation: '¿Qué estilo de arquitectura divide una aplicación en servicios pequeños e independientes?',
  },
  {
    word: 'QUERY',
    translation: 'Consulta',
    category: 'Datos',
    question: 'What do you send to a database when you need to retrieve specific information?',
    questionTranslation: '¿Qué envías a una base de datos cuando necesitas obtener información específica?',
  },
  {
    word: 'RUNTIME',
    translation: 'Entorno de ejecución',
    category: 'Programación',
    question: 'What is the environment where a program is actually running?',
    questionTranslation: '¿Cuál es el entorno donde un programa se está ejecutando realmente?',
  },
  {
    word: 'THREAD',
    translation: 'Hilo de ejecución',
    category: 'Sistemas',
    question: 'What is a sequence of instructions that can run inside a process?',
    questionTranslation: '¿Qué es una secuencia de instrucciones que puede ejecutarse dentro de un proceso?',
  },
  {
    word: 'VERSIONING',
    translation: 'Control de versiones',
    category: 'Colaboración',
    question: 'What tracks code changes and lets a team return to an earlier state?',
    questionTranslation: '¿Qué registra los cambios del código y permite que un equipo vuelva a un estado anterior?',
  },
  {
    word: 'VIRTUALIZATION',
    translation: 'Virtualización',
    category: 'Infraestructura',
    question: 'What creates simulated computing resources on top of physical hardware?',
    questionTranslation: '¿Qué crea recursos informáticos simulados sobre un hardware físico?',
  },
]

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
