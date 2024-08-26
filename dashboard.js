import React from 'react';

const Dashboard = () => {
  const users = [
    {
      name: 'manonita verma',
      mobile: '123-456-7890',
      emailID: 'manonitaverma2002@gmail.com',
      department: 'Engineering',
      manager: 'Gorav Gupta',
      salary: '$80,000',
    },
    {
      name: 'riya sharma',
      mobile: '234-567-8912',
      emailID: 'riyasharma@gmail.com',
      department: 'Engineering',
      manager: 'Gorav Gupta',
      salary: '$100,000',
    },
  ];

  const logout = () => {
    console.log('Logout function called');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {users.map((user, index) => (
        <div key={index}>
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Mobile Number: {user.mobile}</p>
          <p>Email: {user.emailID}</p>
          <h2>Salary Details</h2>
          <p>Department: {user.department}</p>
          <p>Manager: {user.manager}</p>
          <p>Salary: {user.salary}</p>
        </div>
      ))}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
