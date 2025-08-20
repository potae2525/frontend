'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [items, setItems] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getUsers() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const res = await fetch('/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }

        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 5000);
    return () => clearInterval(interval);
  }, [router]);

  const deleteUser = async (id) => {
    const result = await Swal.fire({
      title: 'คุณแน่ใจไหม?',
      text: "ต้องการลบผู้ใช้นี้จริงหรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e53935',
      cancelButtonColor: '#1976d2',
      confirmButtonText: 'ใช่, ลบเลย!',
      cancelButtonText: 'ยกเลิก',
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
        if (!res.ok) {
          Swal.fire('ผิดพลาด!', 'ไม่สามารถลบผู้ใช้ได้', 'error');
          return;
        }
        setItems(prev => prev.filter(item => item.id !== id));
        Swal.fire('ลบสำเร็จ!', 'ผู้ใช้ถูกลบเรียบร้อยแล้ว', 'success');
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire('ผิดพลาด!', 'เกิดข้อผิดพลาดในการลบผู้ใช้', 'error');
      }
    }
  };

  const btnBase = {
    padding: '6px 12px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  };

  const editBtnStyle = { ...btnBase, backgroundColor: '#0288d1', color: 'white' };
  const delBtnStyle = { ...btnBase, backgroundColor: '#e53935', color: 'white' };
  const btnHover = (e, isEnter, color) => {
    e.target.style.backgroundColor = isEnter ? color : '';
    e.target.style.boxShadow = isEnter
      ? '0 6px 15px rgba(0,0,0,0.3)'
      : '0 3px 8px rgba(0,0,0,0.15)';
  };

  if (loading) return <div className='text-center'><h1>Loading...</h1></div>;

  return (
    <div style={{
      maxWidth: '1200px',
      margin: 'auto',
      padding: '20px',
      minHeight: '100vh',
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      color: '#333'
    }}>
      <h4 style={{ fontSize: '2rem', fontWeight: '700', color: '#1976d2', marginBottom: '20px' }}>
        Users List
      </h4>

      {/* Wrapper scrollable สำหรับ mobile */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          borderCollapse: 'separate',
          borderSpacing: '0 10px',
          width: '100%',
          minWidth: '1000px', // ให้ตารางไม่เล็กเกินไป
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(25, 118, 210, 0.2)',
        }}>
          <thead style={{ backgroundColor: '#1976d2', color: 'white', fontWeight: '600' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'center' }}>#</th>
              <th style={{ padding: '12px', minWidth: '120px' }}>Firstname</th>
              <th style={{ padding: '12px', minWidth: '120px' }}>Fullname</th>
              <th style={{ padding: '12px', minWidth: '120px' }}>Lastname</th>
              <th style={{ padding: '12px', minWidth: '120px' }}>Username</th>
              <th style={{ padding: '12px', minWidth: '120px' }}>Password</th>
              <th style={{ padding: '12px', minWidth: '200px' }}>Address</th>
              <th style={{ padding: '12px', minWidth: '80px' }}>Sex</th>
              <th style={{ padding: '12px', minWidth: '120px' }}>Birthday</th>
              <th style={{ padding: '12px', minWidth: '80px', textAlign: 'center' }}>Edit</th>
              <th style={{ padding: '12px', minWidth: '80px', textAlign: 'center' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="11" style={{ textAlign: 'center', padding: '20px', fontSize: '1.1rem' }}>
                  ไม่พบข้อมูลผู้ใช้
                </td>
              </tr>
            ) : (
              items.map(item => (
                <tr key={item.id} style={{
                  backgroundColor: item.id === hoveredRow ? '#e3f2fd' : 'white',
                  boxShadow: item.id === hoveredRow ? '0 0 10px rgba(25, 118, 210, 0.3)' : 'none',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={() => setHoveredRow(item.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td style={{ padding: '12px', textAlign: 'center' }}>{item.id}</td>
                  <td style={{ padding: '12px' }}>{item.firstname}</td>
                  <td style={{ padding: '12px' }}>{item.fullname}</td>
                  <td style={{ padding: '12px' }}>{item.lastname}</td>
                  <td style={{ padding: '12px' }}>{item.username}</td>
                  <td style={{ padding: '12px' }}>{item.password}</td>
                  <td style={{ padding: '12px' }}>{item.address}</td>
                  <td style={{ padding: '12px' }}>{item.sex}</td>
                  <td style={{ padding: '12px' }}>{item.birthday}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <Link href={`/admin/users/edit/${item.id}`} passHref>
                      <button
                        style={{ ...editBtnStyle, width: '70px' }}
                        onMouseEnter={(e) => btnHover(e, true, '#0277bd')}
                        onMouseLeave={(e) => btnHover(e, false)}
                        type="button"
                      >Edit</button>
                    </Link>
                  </td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button
                      style={{ ...delBtnStyle, width: '70px' }}
                      onMouseEnter={(e) => btnHover(e, true, '#c62828')}
                      onMouseLeave={(e) => btnHover(e, false)}
                      type="button"
                      onClick={() => deleteUser(item.id)}
                    >Del</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          table { min-width: 900px; }
          td, th { font-size: 0.9rem !important; padding: 10px !important; }
          button { font-size: 0.85rem !important; padding: 5px 10px !important; }
        }
        @media (max-width: 768px) {
          table { min-width: 700px; }
          td, th { font-size: 0.85rem !important; padding: 8px !important; }
          button { font-size: 0.8rem !important; padding: 5px 8px !important; }
        }
        @media (max-width: 480px) {
          table { min-width: 600px; }
          td, th { font-size: 0.75rem !important; padding: 6px !important; }
          button { font-size: 0.7rem !important; padding: 4px 6px !important; }
        }
      `}</style>
    </div>
  );
}
