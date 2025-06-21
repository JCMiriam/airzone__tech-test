# 🌬️ Airzone Botón de Zona - Prueba técnica

---

## ⚙️ Tecnologías utilizadas

- ⚛️ React + Vite
- 🧠 TypeScript
- 🎨 SASS (CSS modules)
- 🌀 Animaciones SVG
- 🧪 Jest + React Testing Library
- 📚 Storybook

---

## 🚀 Instalación del proyecto

### Clonar proyecto
  ```bash
  git clone https://github.com/JCMiriam/airzone__tech-test.git
  ```

### Instalar dependencias
  📝 Requiere tener instalado pnpm y Node.js v18+
  ```bash
  npm install
  ```

### Ejecutar en local
  ```bash
  npm run dev
  ```
  Podrás verlo en [http://localhost:5173/](http://localhost:5173/)

---

## 📦 Estructura del proyecto
  ```bash
  ├── _mocks_ # Mocks para testing
  └── src/
      ├── assets/ # Archivos necesarios para el proyecto, como imágenes o iconos
      ├── components/ # Componentes específicos reutilizables en el proyecto, incluye sus estilos, tipados, hooks y test en la carpeta de cada componente
      ├── data/ # Datos mockeados de zonas y escenas en formato json
      ├── pages/ # Páginas de la aplicación, donde se crea el layout completo usando todos los componentes necesarios
      ├── stories/ # Storybook con la documentación de cada uno de los componentes
      ├── styles/ # Estilos comunes, incluyendo colores, variables, breackpoints o mixins
      ├── types/ # Tipos comunes o globales, reutilizables en varios componentes. Los tipos específicos se incluirán en la carpeta del propio componente
      └── ui/ # Estilos comunes, incluyendo colores, variables, breackpoints o mixins 
          └── components/ # Componentes comunes, como iconos, botones generales, textos, enlaces, etc.
  ```

---

## 🧪 Ejecutar Tests
  ```bash
  npm run test
  ```

---

## 🖼️ Storybook
  ```bash
  npm run storybook
  ```

  Para ver los componentes y sus estados visualmente en [http://localhost:6006/](http://localhost:6006/).

  
