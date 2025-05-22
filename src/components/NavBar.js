import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 32,
      margin: '32px 0'
    }}>
      <Link href="/" style={{ color: '#ff5e62', fontWeight: 600, textDecoration: 'none' }}>Home</Link>
      <a href="/gallery" style={{ color: '#ff5e62', fontWeight: 600, textDecoration: 'none' }}>Gallery</a>
      <a href="/about" style={{ color: '#ff5e62', fontWeight: 600, textDecoration: 'none' }}>About Me</a>
    </nav>
  );
}