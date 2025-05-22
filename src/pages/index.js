import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import NavBar from '@/components/NavBar';

const artworks = [
  {
    src: '/art/pic1.jpeg',
    title: 'Sunset Over the Lake',
    caption: 'Acrylic on canvas, 2024. Inspired by peaceful evenings.',
  },
  {
    src: '/art/pic2.jpeg',
    title: 'Playful Pups',
    caption: 'Watercolour, 2023. Capturing the joy of dogs at play.',
  },
  {
    src: '/art/pic3.jpeg',
    title: 'Urban Dreams',
    caption: 'Mixed media, 2022. A reflection on city life.',
  },
];

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
    <>
      <NavBar />
      <main style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: 32,
        fontFamily: 'system-ui, sans-serif',
        minHeight: '100vh' // keep this for content height
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.7rem',
          marginBottom: 48,
          letterSpacing: '0.05em',
          fontWeight: 700,
          color: '#ff5e62'
        }}>
          Charlie&apos;s Artwork
        </h1>
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            justifyContent: 'center',
            marginBottom: 64
          }}
        >
          {artworks.map((art, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 6px 32px rgba(0,0,0,0.10)',
                overflow: 'hidden',
                width: 320,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              tabIndex={0}
              aria-label={art.title}
            >
              <Image
                src={art.src}
                alt={art.title}
                width={320}
                height={220}
                style={{
                  width: '100%',
                  height: 220,
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s'
                }}
                sizes="(max-width: 600px) 100vw, 320px"
              />
              <div style={{
                padding: '18px 16px 10px 16px',
                width: '100%',
                textAlign: 'center'
              }}>
                <div style={{
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#ff5e62',
                  marginBottom: 6
                }}>{art.title}</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#555'
                }}>{art.caption}</div>
              </div>
            </div>
          ))}
        </section>
        <section style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.97)',
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
              Email: <a href="mailto:charlie.j.bell13@gmail.com" style={{ color: '#ff5e62', textDecoration: 'underline' }}>charlie.j.bell13@gmail.com</a>
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              Instagram: <a href="https://instagram.com/charliesdoggydoodles" target="_blank" rel="noopener" style={{ color: '#ff9966', textDecoration: 'underline' }}>@charliesdoggydoodles</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}