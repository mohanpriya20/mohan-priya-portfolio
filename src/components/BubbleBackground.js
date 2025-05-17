import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

// List your images here (add all images from public/skills)
const bubbleImages = [
  "/project-tools/image1.png",
  "/project-tools/image2.png",
  "/project-tools/image3.png",
  "/project-tools/image4.png",
  "/project-tools/image5.png",
  "/project-tools/image6.png",
  "/project-tools/image7.png",
  "/project-tools/image8.png",
  "/project-tools/image9.png",
  "/project-tools/image10.png",
  "/project-tools/image11.png",
  "/project-tools/image12.png",
  "/project-tools/image13.png",
  "/project-tools/image14.png",
  "/project-tools/image15.png",
  "/project-tools/image16.png",
  "/project-tools/image17.png",
];

const BUBBLE_SIZE = 80; // px, adjust as needed

const getRandom = (min, max) => Math.random() * (max - min) + min;

const BubbleBackground = () => {
  const containerRef = useRef();
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();

    // Bubble state: {x, y, vx, vy, el}
    const bubbles = bubbleImages.map((_, i) => ({
      x: getRandom(0, width - BUBBLE_SIZE),
      y: getRandom(0, height - BUBBLE_SIZE),
      vx: getRandom(-0.7, 0.7) || 0.5,
      vy: getRandom(-0.7, 0.7) || 0.5,
      el: bubbleRefs.current[i],
    }));

    function animate() {
      for (let i = 0; i < bubbles.length; i++) {
        let b = bubbles[i];
        b.x += b.vx;
        b.y += b.vy;

        // Wall collision
        if (b.x <= 0) { b.x = 0; b.vx *= -1; }
        if (b.x >= width - BUBBLE_SIZE) { b.x = width - BUBBLE_SIZE; b.vx *= -1; }
        if (b.y <= 0) { b.y = 0; b.vy *= -1; }
        if (b.y >= height - BUBBLE_SIZE) { b.y = height - BUBBLE_SIZE; b.vy *= -1; }

        // Bubble-bubble collision
        for (let j = i + 1; j < bubbles.length; j++) {
          let b2 = bubbles[j];
          let dx = b2.x - b.x;
          let dy = b2.y - b.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < BUBBLE_SIZE && dist > 0) {
            // Move them apart so they just touch
            const overlap = BUBBLE_SIZE - dist;
            const nx = dx / dist;
            const ny = dy / dist;
            b.x -= nx * overlap / 2;
            b.y -= ny * overlap / 2;
            b2.x += nx * overlap / 2;
            b2.y += ny * overlap / 2;

            // Swap velocities (elastic collision)
            [b.vx, b2.vx] = [b2.vx, b.vx];
            [b.vy, b2.vy] = [b2.vy, b.vy];
          }
        }

        // Apply position
        if (b.el) {
          b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
        }
      }
      requestAnimationFrame(animate);
    }

    animate();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.bubbleBackground}
      style={{
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none", overflow: "hidden"
      }}
    >
      {bubbleImages.map((src, i) => (
        <img
          key={i}
          ref={el => (bubbleRefs.current[i] = el)}
          src={src}
          alt=""
          className={styles.bubbleImage}
          style={{
            width: BUBBLE_SIZE,
            height: BUBBLE_SIZE,
            position: "absolute",
            borderRadius: "50%",
            opacity: 0.4,
            objectFit: "cover",
            boxShadow: "0 2px 12px #0001",
            display: "flex"
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground; 