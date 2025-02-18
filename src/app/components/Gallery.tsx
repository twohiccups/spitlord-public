"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@styles/Gallery.module.css";

export interface GalleryImage {
  imgSrc: string;       // URL for the full-size image
  imgAlt: string;       // Alt text for the full-size image
  thumbnailSrc: string; // URL for the thumbnail (can be the same as full-size)
  thumbnailAlt: string; // Alt text for the thumbnail
}

interface GalleryProps {
  images: GalleryImage[];
}


const Gallery = ({ images }: GalleryProps) => {
  // Store the index of the selected image
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // For swipe detection on mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50; // minimum swipe distance in pixels

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev! - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev! + 1
    );
  };

  // Keyboard navigation: left/right arrows and Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") {
          showNext();
        } else if (e.key === "ArrowLeft") {
          showPrev();
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Mobile swipe events
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      // swiped left (next)
      showNext();
    } else if (distance < -minSwipeDistance) {
      // swiped right (previous)
      showPrev();
    }
  };

  return (
    <>
      <div className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => openModal(index)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={image.imgSrc}
                  alt={image.imgAlt}
                  fill
                  className={styles.imageContent}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={(e) => e.stopPropagation()} // Prevent overlay click closing modal when interacting with modalContent
            >
              {/* Close Icon */}
              <button
                className={styles.closeButton}
                onClick={closeModal}
              >
                &times;
              </button>
              {/* Navigation Arrows */}
              <button
                className={styles.prevButton}
                onClick={showPrev}
              >
                &#8249;
              </button>
              <button
                className={styles.nextButton}
                onClick={showNext}
              >
                &#8250;
              </button>
              {/* Modal image wrapper */}
              <div
                className={styles.modalImageWrapper}
                onClick={closeModal} // Clicking on the wrapper (outside the image) closes the modal
              >
                <Image
                  src={images[selectedIndex].imgSrc}
                  alt={images[selectedIndex].imgAlt}
                  fill
                  className={styles.imageContent}
                  style={{ objectFit: "contain" }}
                  sizes="100vw"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking directly on the image
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
