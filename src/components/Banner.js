export default function Banner() {
  return (
    <section id="banner">
      <video autoPlay muted loop playsInline style={{ width: '100%', height: 'auto' }}>
        <source src="/video/banner.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </section>
  );
}
