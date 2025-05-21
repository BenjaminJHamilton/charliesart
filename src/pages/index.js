import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export async function getStaticProps() {
  const artDir = path.join(process.cwd(), 'public', 'art');
  let images = [];
  try {
    images = fs
      .readdirSync(artDir)
      .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
      .map(file => ({
        src: `/art/${file}`,
        title: file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
      }));
  } catch (e) {
    // Directory may not exist yet
  }
  return { props: { images } };
}

export default function Home({ images }) {
  return (
    <main style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: 32,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: 40,
        letterSpacing: '0.05em'
      }}>
        <span style={{
          background: 'linear-gradient(90deg, #ff9966, #ff5e62)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Charlie&apos;s Artwork</span>
      </h1>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
          marginBottom: 56
        }}
      >
        {images.map((art, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              textAlign: 'center'
            }}
            tabIndex={0}
            aria-label={art.title}
          >
            <Image
              src={art.src}
              alt={art.title}
              width={600}
              height={400}
              style={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s'
              }}
              sizes="(max-width: 600px) 100vw, 600px"
            />
            <div style={{
              padding: '16px 8px',
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#333'
            }}>
              {art.title}
            </div>
          </div>
        ))}
      </section>
      <section style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 16,
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
          padding: '32px 40px',
          minWidth: 320,
          maxWidth: 400,
          textAlign: 'center'
        }}>
          <h2 style={{
            marginBottom: 12,
            fontSize: '1.5rem',
            color: '#ff5e62'
          }}>Contact</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: 8 }}>
            Email: <a href="mailto:artist@email.com" style={{ color: '#ff5e62', textDecoration: 'underline' }}>artist@email.com</a>
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Instagram: <a href="https://instagram.com/charliesdoggydoodles" target="_blank" rel="noopener" style={{ color: '#ff9966', textDecoration: 'underline' }}>@charliesdoggydoodles</a>
          </p>
        </div>
      </section>
    </main>
  );
}