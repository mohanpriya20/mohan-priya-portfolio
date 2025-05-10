import styles from "../styles/Home.module.css";

const ImageBanner = () => {
  const imageCount = 18; // Update this if you add more images
  const images = Array.from({ length: imageCount }, (_, i) => `/skills/image${i + 1}.png`);

  return (
    <section className={styles.imageBanner}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTrack}>
          {images.map((image, index) => (
            <div key={index} className={styles.bannerItem}>
              <img src={image} alt={`Tech logo ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate images for seamless scrolling */}
          {images.map((image, index) => (
            <div key={`dup-${index}`} className={styles.bannerItem}>
              <img src={image} alt={`Tech logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageBanner; 