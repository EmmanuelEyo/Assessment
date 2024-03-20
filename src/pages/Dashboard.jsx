import React from 'react';
import Hero from '../components/Hero';
import Profit from '../components/Profit';
import Sales from '../components/Sales';
import TotalRevenue from '../components/TotalRevenue';
import Payments from '../components/Payments';
import Transactions from '../components/Transactions';
import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
import IncomeExpense from '../components/IncomeExpense';
import Transaction from '../components/Transaction';
import { motion } from 'framer-motion'
import '../App.css'

const Dashboard = () => {
  return (
    <motion.div className='dashboard-container'  
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}>
      <Hero />
      <Profit />
      <Sales />
      <TotalRevenue />
      <Payments />
      <Transactions />
      <Profile />
      <Statistics percentage={38} color="#04fc43" />
      <motion.div className='flex flex-col-reverse justify-start' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.9 }}>
        <IncomeExpense />
        <Transaction />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;

