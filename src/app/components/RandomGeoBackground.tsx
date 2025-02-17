"use client";
import { useState, useEffect } from "react";
import styles from "@styles/RandomGeoBackground.module.css";


function generateGlitchTile(): string {
    const tileSize = 200;
    const quadrantSize = tileSize / 2;
  
    // Create the top-left quadrant canvas
    const quadCanvas = document.createElement("canvas");
    quadCanvas.width = quadrantSize;
    quadCanvas.height = quadrantSize;
    const quadCtx = quadCanvas.getContext("2d");
    if (!quadCtx) return "";
  
    // Fill quadrant with a base grey tone
    quadCtx.fillStyle = "#ccc";
    quadCtx.fillRect(0, 0, quadrantSize, quadrantSize);
  
    // Helper: random number between min and max
    function random(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
  
    // Draw random shapes in the top-left quadrant
    const numShapes = Math.floor(random(3, 7));
    for (let i = 0; i < numShapes; i++) {
      const shapeType = Math.floor(random(0, 3)); // 0: circle, 1: rectangle, 2: triangle
      const x = random(0, quadrantSize);
      const y = random(0, quadrantSize);
      const size = random(20, quadrantSize);
      const grey = Math.floor(random(50, 200));
      quadCtx.fillStyle = `rgb(${grey}, ${grey}, ${grey})`;
      quadCtx.strokeStyle = `rgb(${grey}, ${grey}, ${grey})`;
      quadCtx.lineWidth = random(1, 3);
  
      switch (shapeType) {
        case 0: // Circle
          quadCtx.beginPath();
          quadCtx.arc(x, y, size / 2, 0, Math.PI * 2);
          quadCtx.fill();
          break;
        case 1: // Rectangle
          quadCtx.fillRect(x, y, size, size);
          break;
        case 2: // Triangle
          quadCtx.beginPath();
          quadCtx.moveTo(x, y);
          quadCtx.lineTo(x + size, y);
          quadCtx.lineTo(x + size / 2, y - size);
          quadCtx.closePath();
          quadCtx.fill();
          break;
        default:
          break;
      }
    }
  
    // Create the full tile by mirroring the quadrant into all four quadrants
    const fullCanvas = document.createElement("canvas");
    fullCanvas.width = tileSize;
    fullCanvas.height = tileSize;
    const fullCtx = fullCanvas.getContext("2d");
    if (!fullCtx) return "";
  
    // Top-left quadrant
    fullCtx.drawImage(quadCanvas, 0, 0);
    // Top-right quadrant (mirror horizontally)
    fullCtx.save();
    fullCtx.translate(tileSize, 0);
    fullCtx.scale(-1, 1);
    fullCtx.drawImage(quadCanvas, 0, 0);
    fullCtx.restore();
    // Bottom-left quadrant (mirror vertically)
    fullCtx.save();
    fullCtx.translate(0, tileSize);
    fullCtx.scale(1, -1);
    fullCtx.drawImage(quadCanvas, 0, 0);
    fullCtx.restore();
    // Bottom-right quadrant (mirror both)
    fullCtx.save();
    fullCtx.translate(tileSize, tileSize);
    fullCtx.scale(-1, -1);
    fullCtx.drawImage(quadCanvas, 0, 0);
    fullCtx.restore();
  
    // Apply glitch effect by shifting random horizontal slices
    const glitchCount = Math.floor(random(3, 7));
    for (let i = 0; i < glitchCount; i++) {
      const glitchY = random(0, tileSize);
      const glitchHeight = random(5, 30);
      const offset = random(-20, 20);
      fullCtx.drawImage(
        fullCanvas,
        0,
        glitchY,
        tileSize,
        glitchHeight,
        offset,
        glitchY,
        tileSize,
        glitchHeight
      );
    }
  
    return fullCanvas.toDataURL();
  }

export default function MorphingTiledGlitchBackground() {
  const [baseBg, setBaseBg] = useState<string>("");
  const [overlayBg, setOverlayBg] = useState<string>("");
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);

  useEffect(() => {
    // Generate the initial tile
    const initialTile = generateGlitchTile();
    setBaseBg(initialTile);

    // Periodically generate a new tile and cross-fade
    const interval = setInterval(() => {
      const newTile = generateGlitchTile();
      setOverlayBg(newTile);
      setOverlayVisible(true);
      // After the transition, update the base background and hide the overlay
      setTimeout(() => {
        setBaseBg(newTile);
        setOverlayVisible(false);
      }, 3000); // 3 seconds transition duration
    }, 15000); // New tile every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <div
        className={styles.base}
        style={{ backgroundImage: `url(${baseBg})` }}
      />
      <div
        className={`${styles.overlay} ${overlayVisible ? styles.visible : ""}`}
        style={{ backgroundImage: `url(${overlayBg})` }}
      />
    </div>
  );
}
