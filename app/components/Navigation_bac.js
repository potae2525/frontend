
import Link from "next/link";

export default function Home() {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const hoverStyle = {
    backgroundColor: '#005bb5',
    transform: 'translateY(-2px)',
  };

  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link href="/" passHref>
          <button style={buttonStyle}>หน้าแรก</button>
        </Link>
        <Link href="/about" passHref>
          <button style={buttonStyle}>เกี่ยวกับ</button>
        </Link>
        <Link href="/services" passHref>
          <button style={buttonStyle}>บริการ</button>
        </Link>
        <Link href="/contact" passHref>
          <button style={buttonStyle}>ติดต่อ</button>
        </Link>
      </nav>

      <h1><center>Mr Aunwat Somte</center></h1>
    </>
  );
}
