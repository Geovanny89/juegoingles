# HangWord Lab

Juego educativo de ahorcado para practicar vocabulario técnico de inglés. Está construido con React, TypeScript, Vite y Tailwind CSS.

## Ejecutar en local

```bash
npm install
npm run dev
```

Después abre la URL que muestre Vite, normalmente `http://localhost:3000`.

Para generar una compilación de producción:

```bash
npm run build
npm run preview
```

## Estructura

- `src/data/words.ts`: banco de palabras y traducciones.
- `src/hooks/useHangmanGame.ts`: estado y reglas de cada partida.
- `src/components/HangmanFigure.tsx`: muñeco SVG reactivo a los errores.
- `src/components/Keyboard.tsx`: teclado de letras reutilizable.
- `src/components/WordDisplay.tsx`: palabra, traducción y pista.
- `src/components/GameStatus.tsx`: mensajes de victoria y derrota.
- `src/App.tsx`: composición principal de la pantalla.

No necesita backend ni variables de entorno. Todo el progreso vive en el navegador durante la partida.
