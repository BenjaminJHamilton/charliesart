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
      <Link href="/gallery" style={{ color: '#ff5e62', fontWeight: 600, textDecoration: 'none' }}>Gallery</Link>
      <Link href="/about" style={{ color: '#ff5e62', fontWeight: 600, textDecoration: 'none' }}>About Me</Link>
    </nav>
  );
}