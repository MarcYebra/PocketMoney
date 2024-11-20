import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/expenses/';

export const fetchExpenses = async() => {
    const response = await axios.get(API_URL);
    return response.data.expenses;
};

export const addExpense = async(expenseData) => {
    const response = await axios.post(API_URL, expenseData);
    return response.data;
};