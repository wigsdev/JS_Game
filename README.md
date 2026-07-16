# 🎮 Juego del Número Secreto

> **Un juego interactivo en entorno web donde pones a prueba tu intuición y lógica intentando adivinar un número aleatorio generado por la computadora.**

---

## 📊 Descripción del Proyecto

El **Juego del Número Secreto** es una aplicación web simple pero altamente dinámica desarrollada en vanilla JavaScript, HTML y CSS. Forma parte de las prácticas del programa **ONE AI FOR TECH** para asimilar la manipulación del DOM, control de flujo, lógica de programación y la integración de versionado con Git/GitHub.

---

## 🚀 Características Principales

- **Generación Aleatoria Única:** Los números secretos son aleatorios y se controlan a través de una lista para no repetir números en una misma sesión de juego.
- **Retroalimentación Dinámica:** La aplicación indica al jugador en tiempo real si el número secreto es **mayor** o **menor** que el ingresado.
- **Contador de Intentos:** Cuenta el número exacto de intentos realizados hasta lograr adivinar el número.
- **Interfaz Fluida:** Diseñado con un fondo en degrade y animaciones integradas para ofrecer una interfaz visualmente premium y agradable.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Para la estructura semántica de la interfaz.
- **CSS3:** Estilos personalizados que incluyen fuentes de Google Fonts (Chakra Petch e Inter), bordes redondeados y efectos dinámicos.
- **JavaScript (ES6):** Toda la lógica de eventos, manipulación interactiva de clases y del DOM, así como algoritmos recursivos para la generación aleatoria.

---

## 📖 Instrucciones de Uso y Cómo Jugar

1. Escribe un número en el campo de entrada ubicado en la pantalla (debe ser un valor entre **1** y **100**).
2. Haz clic en el botón **"Intentar"**.
3. Lee el mensaje en pantalla:
   - Si tu número es muy alto, te indicará que el número secreto es **menor**.
   - Si tu número es muy bajo, te indicará que el número secreto es **mayor**.
4. Repite el proceso hasta adivinar el número.
5. Al acertar, se habilitará el botón **"Nuevo juego"** para reiniciar el contador e iniciar una nueva partida con otro número.

---

## 💻 Ejecución Local

Para jugar de manera local en tu navegador, sigue estos pasos:

1. Clona el repositorio en tu máquina:
   ```bash
   git clone https://github.com/wigsdev/JS_Game.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd JS_Game
   ```
3. Abre el archivo `index.html` en tu navegador de preferencia:
   - Puedes hacer doble clic sobre el archivo `index.html`.
   - O puedes utilizar la extensión **Live Server** en Visual Studio Code.
