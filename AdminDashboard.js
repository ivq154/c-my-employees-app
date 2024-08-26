import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeManagement from './EmployeeManagement';
import DepartmentManagement from './DepartmentManagement';
import SalaryManagement from './SalaryManagement';
import ManagerManagement from './ManagerManagement';

function AdminDashboard() {
  const navigate = useNavigate();

const [employees, setEmployees] = useState([]);
const [departments, setDepartments] = useState([]);
  const [salaries, setSalaries] = useState([]);
  const [managers, setManagers] = useState([]);

  // Optionally add a check for session or auth here if needed
  useEffect(() => {
    // Example: Check if user is authenticated; otherwise navigate to login
    // Replace this with actual authentication check if needed
const isAuthenticated = true; // Replace with actual authentication logic

    if (!isAuthenticated) {
      navigate('/adminLogin');
    }
  }, [navigate]);

  // Assuming if not authenticated, this will redirect to login
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <button 
        onClick={() => navigate('/adminLogin')} 
        style={{ 
          padding: '10px 20px',
          backgroundColor:'blue', 
          color:'pink', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Logout
      </button>
      <div style={{ marginTop: '20px' }}>
        <EmployeeManagement 
          employees={employees} 
          setEmployees={setEmployees} 
        />

        <DepartmentManagement
          departments={departments}
          setDepartments={setDepartments}
          employees={employees}
          setEmployees={setEmployees}
        />

        <SalaryManagement
          salaries={salaries}
          setSalaries={setSalaries}           
          employees={employees} 
        />

        <ManagerManagement 
          managers={managers}
          setManagers={setManagers}
        />
      </div>
    </div>
  );
}

export default AdminDashboard;
