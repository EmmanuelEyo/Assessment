import React from 'react';
import Hero from '../components/Hero';
import Profit from '../components/Profit';
import Sales from '../components/Sales';
import TotalRevenue from '../components/TotalRevenue';
import Payments from '../components/Payments';
import Transactions from '../components/Transactions';
import Profile from '../components/Profile';

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <Profit />
      <Sales />
      <TotalRevenue />
      <Payments />
      <Transactions />
      <Profile />
    </div>
    
  );
};

export default Dashboard;

