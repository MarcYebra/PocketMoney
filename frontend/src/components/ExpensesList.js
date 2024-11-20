import React, { useState, useEffect } from 'react';
import { fetchExpenses } from '../api/expensesAPI';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await fetchExpenses();
        setExpenses(data);
      } catch (error) {
        console.error('Error loading expenses:', error);
      }
    };

    loadExpenses();
  }, []);

  return (
    <div>
      <h1>Expenses List</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
