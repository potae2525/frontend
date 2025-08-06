'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUsers();
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, firstname, fullname, lastname, username, password }),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          router.push('/register');
        });
        setFirstname('');
        setFullname('');
        setLastname('');
        setUsername('');
        setPassword('');
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  // Styles แบบ inline
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #fcb045 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px',
  };

  const formWrapperStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    maxWidth: '400px',
    width: '100%',
    padding: '32px',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '24px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1.5px solid #ccc',
    marginBottom: '18px',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const selectStyle = {
    ...inputStyle,
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#5a67d8',
    color: 'white',
    fontWeight: '700',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <h1 style={headingStyle}>แก้ไขข้อมูลสมัครสมาชิก {id}</h1>
        {items.map((item) => (
          <form key={item.id} onSubmit={handleUpdateSubmit}>
            <label style={labelStyle} htmlFor="firstname">คำนำหน้า</label>
            <select
              id="firstname"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              defaultValue={item.firstname}
              style={selectStyle}
              required
            >
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>

            <label style={labelStyle} htmlFor="fullname">ชื่อ</label>
            <input
              id="fullname"
              type="text"
              placeholder="ชื่อ"
              defaultValue={item.fullname}
              onChange={(e) => setFullname(e.target.value)}
              style={inputStyle}
              required
            />

            <label style={labelStyle} htmlFor="lastname">นามสกุล</label>
            <input
              id="lastname"
              type="text"
              placeholder="นามสกุล"
              defaultValue={item.lastname}
              onChange={(e) => setLastname(e.target.value)}
              style={inputStyle}
              required
            />

            <label style={labelStyle} htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="username"
              defaultValue={item.username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              required
            />

            <label style={labelStyle} htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              defaultValue={item.password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />

            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#434190')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#5a67d8')}
            >
              ปรับปรุงข้อมูล
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
