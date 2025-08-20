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

        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
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
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          Swal.fire('ผิดพลาด!', 'ไม่สามารถลบผู้ใช้ได้', 'error');
          return;
        }
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        Swal.fire('ลบสำเร็จ!', 'ผู้ใช้ถูกลบเรียบร้อยแล้ว', 'success');
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire('ผิดพลาด!', 'เกิดข้อผิดพลาดในการลบผู้ใช้', 'error');
      }
    }
  };

  // ฟังก์ชัน logout พร้อมหน้าต่างยืนยัน
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'คุณแน่ใจไหม?',
      text: "ต้องการออกจากระบบจริงหรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e53935',
      cancelButtonColor: '#1976d2',
      confirmButtonText: 'ใช่, ออกจากระบบ!',
      cancelButtonText: 'ยกเลิก',
    });

    if (result.isConfirmed) {
      localStorage.removeItem('token');
      router.push('/login');
      Swal.fire('ออกจากระบบแล้ว!', '', 'success');
    }
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    color: '#333',
    padding: '20px',
    minHeight: '100vh',
  };

  const headingWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1976d2',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  };

  const logoutBtnStyle = {
    backgroundColor: '#e53935',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
  };

  const tableStyle = {
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
    width: '100%',
    boxShadow: '0 4px 15px rgba(25, 118, 210, 0.2)',
    borderRadius: '12px',
    overflow: 'hidden',
  };

  const theadStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    fontWeight: '600',
  };

  const thTdStyle = {
    padding: '12px 15px',
    maxWidth: '180px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    fontSize: '0.95rem',
  };

  const trStyle = (id) => ({
    backgroundColor: id === hoveredRow ? '#e3f2fd' : 'white',
    boxShadow: id === hoveredRow ? '0 0 10px rgba(25, 118, 210, 0.3)' : 'none',
    transition: 'all 0.3s ease',
    cursor: 'default',
  });

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

  const editBtnStyle = {
    ...btnBase,
    backgroundColor: '#0288d1',
    color: 'white',
  };

  const delBtnStyle = {
    ...btnBase,
    backgroundColor: '#e53935',
    color: 'white',
  };

  const btnHover = (e, isEnter, color) => {
    e.target.style.backgroundColor = isEnter ? color : '';
    e.target.style.boxShadow = isEnter
      ? '0 6px 15px rgba(0,0,0,0.3)'
      : '0 3px 8px rgba(0,0,0,0.15)';
  };

  if (loading) {
    return <div className='text-center'><h1>Loading...</h1></div>;
  }

  return (
    <div style={containerStyle}>
      {/* หัวตาราง + ปุ่ม logout */}
      <div style={headingWrapperStyle}>
        <h4 style={headingStyle}>Users List</h4>
        <button style={logoutBtnStyle} onClick={handleLogout}>ออกจากระบบ</button>
      </div>

      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th style={{ ...thTdStyle, textAlign: 'center' }}>#</th>
            <th style={thTdStyle}>Firstname</th>
            <th style={thTdStyle}>Fullname</th>
            <th style={thTdStyle}>Lastname</th>
            <th style={thTdStyle}>Username</th>
            <th style={thTdStyle}>Password</th>
            <th style={{ ...thTdStyle, maxWidth: '300px' }}>Address</th>
            <th style={thTdStyle}>Sex</th>
            <th style={thTdStyle}>Birthday</th>
            <th style={{ ...thTdStyle, textAlign: 'center' }}>Edit</th>
            <th style={{ ...thTdStyle, textAlign: 'center' }}>Delete</th>
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
            items.map((item) => (
              <tr
                key={item.id}
                style={trStyle(item.id)}
                onMouseEnter={() => setHoveredRow(item.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={{ ...thTdStyle, textAlign: 'center' }}>{item.id}</td>
                <td style={thTdStyle}>{item.firstname}</td>
                <td style={thTdStyle}>{item.fullname}</td>
                <td style={thTdStyle}>{item.lastname}</td>
                <td style={thTdStyle}>{item.username}</td>
                <td style={thTdStyle}>{item.password}</td>
                <td style={{ ...thTdStyle, maxWidth: '300px' }}>{item.address}</td>
                <td style={thTdStyle}>{item.sex}</td>
                <td style={thTdStyle}>{item.birthday}</td>
                <td style={{ ...thTdStyle, textAlign: 'center' }}>
                  <Link href={`/admin/users/edit/${item.id}`} passHref>
                    <button
                      style={editBtnStyle}
                      onMouseEnter={(e) => btnHover(e, true, '#0277bd')}
                      onMouseLeave={(e) => btnHover(e, false)}
                      type="button"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td style={{ ...thTdStyle, textAlign: 'center' }}>
                  <button
                    style={delBtnStyle}
                    onMouseEnter={(e) => btnHover(e, true, '#c62828')}
                    onMouseLeave={(e) => btnHover(e, false)}
                    type="button"
                    onClick={() => deleteUser(item.id)}
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
