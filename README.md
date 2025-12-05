# 💼 Portafolio Personal - Jeancarlo Pinilla

![Portfolio Preview](./assets/preview.png)

Un portafolio web moderno y responsive diseñado para mostrar mis habilidades, proyectos y experiencia como desarrollador backend junior.

🌐 **[Ver Demo en Vivo](https://portafolio-animado-ruby.vercel.app/)**

## ✨ Características

- **Diseño Moderno y Responsive**: Interfaz adaptable a todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales que mejoran la experiencia del usuario
- **Navegación Intuitiva**: Menú de navegación fijo con scroll suave
- **Secciones Organizadas**: 
  - Inicio con información de contacto destacada
  - Sobre mí
  - Habilidades técnicas
  - Proyectos destacados
  - Experiencia y educación
  - Formulario de contacto funcional
- **Formulario de Contacto**: Integrado con FormSubmit para recibir mensajes directamente
- **Optimizado para SEO**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados con variables CSS, Grid y Flexbox
- **JavaScript**: Interactividad y validación de formularios
- **FormSubmit**: Servicio de envío de formularios sin backend

## 🚀 Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/JeancarloPinilla/portafolio.git
```

2. Navega al directorio del proyecto:
```bash
cd portafolio
```

3. Abre el archivo `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

## 📂 Estructura del Proyecto

```
portafolio/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── assets/             # Recursos (imágenes)
│   ├── jean.jpg
│   ├── image.png
│   └── image1.png
└── README.md           # Documentación
```

## 🎨 Características Destacadas

### Diseño Visual
- Gradientes modernos en azul e índigo
- Tarjetas con efecto hover y sombras
- Animaciones de entrada para elementos
- Diseño de glassmorphism en la navegación

### Funcionalidades
- Menú hamburguesa para dispositivos móviles
- Scroll suave entre secciones
- Validación de formulario en tiempo real
- Navbar con efecto de blur al hacer scroll
- Cierre automático del menú móvil al navegar

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

## 🔧 Personalización

### Colores
Los colores principales están definidos como variables CSS en `:root`:

```css
--blue-600: #2563eb;
--blue-700: #1d4ed8;
--indigo-600: #4f46e5;
--gray-50: #f9fafb;
/* ... más colores */
```

### Contenido
Para actualizar tu información:

1. **Datos personales**: Edita la sección del hero en `index.html`
2. **Habilidades**: Modifica la sección `#habilidades`
3. **Proyectos**: Actualiza la sección `#proyectos` con tus proyectos
4. **Experiencia**: Edita la timeline en `#experiencia`

### Formulario de Contacto
El formulario usa FormSubmit. Para usar tu propio email:

```javascript
// En script.js, línea del fetch
const response = await fetch('https://formsubmit.co/TU-EMAIL@ejemplo.com', {
```

## 📧 Contacto

- **Email**: jeancarlopinilla8@gmail.com
- **Teléfono**: +57 3118574581
- **Ubicación**: Cúcuta, Colombia
- **GitHub**: [@JeancarloPinilla](https://github.com/JeancarloPinilla)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar este código como base para tu propio portafolio.

## 🙏 Agradecimientos

- Inspiración de diseño de portfolios modernos
- Iconos SVG personalizados
- Gradientes de [UI Gradients](https://uigradients.com/)

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!

**Desarrollado con 💙 por Jeancarlo Pinilla**
