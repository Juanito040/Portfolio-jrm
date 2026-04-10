# Portafolio — Juan Miguel Ramirez Mancilla

Portafolio personal construido con React + Vite. Presenta proyectos, experiencia y formas de contacto.

## Stack

- **React 19** + Vite 8
- **Framer Motion** — animaciones y transiciones
- **SCSS Modules** — estilos con variables y mixins
- **EmailJS** — formulario de contacto sin backend
- **Lucide React** + **Simple Icons** — iconografía

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de EmailJS

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:5173` |
| `npm run build` | Build de producción en `/dist` |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Lint con ESLint |

## Variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Las credenciales se obtienen en [emailjs.com](https://www.emailjs.com).

## Estructura

```
src/
├── components/       # Componentes reutilizables (Navbar, Footer, etc.)
├── sections/         # Secciones de la página (Hero, About, Projects...)
├── contexts/         # Context API (idioma)
├── data/             # Contenido: información personal, traducciones
├── hooks/            # Custom hooks
├── styles/           # Variables SCSS, mixins, estilos globales
└── utils/            # Utilidades de animación
```
