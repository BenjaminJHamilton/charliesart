import NavBar from '../components/NavBar';

export default function About() {
  return (
    <>
      <NavBar />
      <main style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: 32,
        fontFamily: 'system-ui, sans-serif',
        minHeight: '100vh'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.2rem',
          marginBottom: 32,
          color: '#ff5e62'
        }}>
          About Me
        </h1>
        <section style={{ fontSize: '1.2rem', color: '#333', lineHeight: 1.7 }}>
          <p>
            Hi, I&apos;m Charlie! I&apos;m an artist based in [Your Location]. I love capturing the beauty of everyday life, animals, and cityscapes in a variety of mediums. My work is inspired by peaceful moments, playful pets, and the vibrant energy of urban life.
          </p>
          <p>
            Thank you for visiting my site. Please check out my gallery and feel free to get in touch!
          </p>
        </section>
      </main>
    </>
  );
}