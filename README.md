# 🃏 HTML Match Battle - El Juego de Etiquetas y Atributos

¡Bienvenido a **Etique y Atributo**! Un juego de memoria educativo diseñado para aprender y repasar la relación entre etiquetas HTML y sus atributos correspondientes de una forma divertida y competitiva.

## 🚀 ¿De qué trata el juego?

A diferencia de un juego de memoria tradicional donde buscas dos cartas iguales, aquí el reto es **técnico**:
* Debes emparejar una **Etiqueta HTML** (Color Naranja 🟠) con su **Atributo correspondiente** (Color Azul 🔵). 
* **Ejemplo:** Para ganar, deberás encontrar la pareja de `<img>` con `src`.

### 🎮 Características principales:
* **Multijugador local:** Soporte para 3 equipos (Rojo, Azul y Verde).
* **Sistema de Puntuación:** Cada acierto suma **+15 puntos**.
* **Mecánica de Ataque:** Cada equipo tiene **3 Jokers (🃏)**. ¡Puedes usarlos para restar **-10 puntos** a tus oponentes!
* **Aprendizaje por Voz:** Al realizar una pareja correcta, el navegador leerá una **definición educativa** sobre el elemento emparejado (usando Web Speech API).
* **Arquitectura Escalable:** Código refactorizado con Hooks personalizados, componentes modulares y lógica separada.

---

## 🛠️ Tecnologías utilizadas

* [React.js](https://reactjs.org/) - Biblioteca de UI.
* [Vite](https://vitejs.dev/) - Herramienta de construcción ultra rápida.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Animaciones 3D y diseño responsivo.
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - Para las definiciones por voz.

---

## 📂 Estructura del Proyecto
El código está organizado siguiendo las mejores prácticas de desarrollo:

src/components/: Componentes visuales reutilizables (Card.jsx).

src/hooks/: Lógica de estado y efectos (useGame.js).

src/utils/: Funciones puras y utilidades de voz (gameLogic.js).

src/data/: Datos de las cartas y definiciones (data.js).


## 📦 Instalación y Ejecución

Sigue estos pasos para tener el juego corriendo en tu ordenador localmente:

### 1. Clonar el repositorio
Abre tu terminal y ejecuta:
```bash
git clone [https://github.com/TU_USUARIO/juego-etiqueta-atributo.git](https://github.com/TU_USUARIO/juego-etiqueta-atributo.git)

cd juego-etiqueta-atributo

npm install

npm run dev

