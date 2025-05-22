import NavBar from '@/components/NavBar';
import Image from 'next/image';

const galleryImages = [
  { src: '/art/pic1.jpeg', title: 'Sunset Over the Lake' },
  { src: '/art/pic2.jpeg', title: 'Playful Pups' },
  { src: '/art/pic3.jpeg', title: 'Urban Dreams' },
  // Add more images as needed
];

export default function Gallery() {
  return (
    <>
        <NavBar />
        <main style={{
            maxWidth: 1200,
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
            Gallery
        </h1>
        <section style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32
        }}>
            {galleryImages.map((img, i) => (
            <div key={i} style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                textAlign: 'center'
            }}>
                <Image
                src={img.src}
                alt={img.title}
                width={400}
                height={280}
                style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }}
                sizes="(max-width: 600px) 100vw, 400px"
                />
                <div style={{
                padding: '12px 8px',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#333'
                }}>
                {img.title}
                </div>
            </div>
            ))}
        </section>
        </main>
    </>
  );
}