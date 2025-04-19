'use client';
import { useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';


//const TEXT_COLOR = theme.;
//const BACKGROUND_COLOR = siteConfig.backgroundColor;
//const ALPHA_BACKGROUND_COLOR = `${siteConfig.backgroundColor}20`;
//const FONT = '15pt monospace';
//const TEXT_COLUMN_WIDTH = 20;
//const FPS = 20;

function getPseudoRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MatrixBackground({ textColour, backgroundColour, alphaBackgroundColour, font, textColumnWidth, fps }) {
  const shouldReduceMotion = useReducedMotion();
  const matrixCanvasRef = useRef(null);

  const initializeMatrixCanvas = useCallback(() => {
    if (!matrixCanvasRef.current) return undefined;

    const { parentElement } = matrixCanvasRef.current;

    matrixCanvasRef.current.width = parentElement?.offsetWidth || window.innerWidth;
    matrixCanvasRef.current.height = parentElement?.offsetHeight || window.innerHeight;

    const canvasContext = matrixCanvasRef.current.getContext('2d');
    if (!canvasContext) return undefined;

    canvasContext.fillStyle = backgroundColour;
    canvasContext.fillRect(0, 0, matrixCanvasRef.current.width, matrixCanvasRef.current.height);

    const numberOfColumns = Math.floor(matrixCanvasRef.current.width / textColumnWidth) + 1;
    const defaultYPositions = Array(numberOfColumns).fill(0);

    return defaultYPositions;
  }, [backgroundColour, textColumnWidth]);

  const drawMatrix = useCallback((yPositions) => {
    if (!matrixCanvasRef.current) return undefined;

    const canvasContext = matrixCanvasRef.current.getContext('2d');

    if (!canvasContext) return undefined;

    canvasContext.fillStyle = alphaBackgroundColour;
    canvasContext.fillRect(0, 0, matrixCanvasRef.current.width, matrixCanvasRef.current.height);

    canvasContext.fillStyle = textColour;
    canvasContext.font = font;

    const newYPositions = yPositions.map((y, index) => {
      const char = String.fromCharCode(getPseudoRandomInRange(33, 126));
      const x = index * textColumnWidth;

      canvasContext.fillText(char, x, y);

      const shouldResetYPosition = y > 100 + Math.random() * 10000;
      return shouldResetYPosition ? 0 : y + 20;
    });

    return newYPositions;
  }, [alphaBackgroundColour, textColour, font, textColumnWidth]);

  useEffect(() => {
    const defaultYPositions = initializeMatrixCanvas();

    window.addEventListener('resize', initializeMatrixCanvas);
    window.addEventListener('orientationchange', initializeMatrixCanvas);

    const animate = (yPositions) => {
      if (shouldReduceMotion) return;
      const newYPositions = drawMatrix(yPositions);

      if (!newYPositions) return;

      setTimeout(() => {
        animate(newYPositions);
      }, 1000 / fps);
    };

    if (defaultYPositions) animate(defaultYPositions);
    console.log('Matrix effect mounted');

    return () => {
      window.removeEventListener('resize', initializeMatrixCanvas);
      window.removeEventListener('orientationchange', initializeMatrixCanvas);
    };
  }, [drawMatrix, initializeMatrixCanvas, shouldReduceMotion, fps]);

  return (
    <canvas
      ref={matrixCanvasRef}
      aria-label="Matrix background"
      className="mask-radial-faded absolute inset-0 -z-10 h-full w-full opacity-75"
    />
  );
}

export { MatrixBackground };
