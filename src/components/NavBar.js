import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 48,
      margin: '40px 0',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '1.35rem',
      fontWeight: 700,
      letterSpacing: '0.02em'
    }}>
      <Link href="/" style={{ color: '#ff5e62', textDecoration: 'none' }}>Home</Link>
      <Link href="/gallery" style={{ color: '#ff5e62', textDecoration: 'none' }}>Gallery</Link>
      <Link href="/about" style={{ color: '#ff5e62', textDecoration: 'none' }}>About Me</Link>
    </nav>
  );
}