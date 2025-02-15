// Get elements from the DOM
const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totalExpenses = document.getElementById('totalExpenses');

// Array to store expenses
let expenses = [];

// Function to add an expense
function addExpense() {
  const name = expenseName.value.trim();
  const amount = parseFloat(expenseAmount.value.trim());

  if (name === '' || isNaN(amount)) {
    alert('Please enter valid expense details.');
    return;
  }

  // Add the expense to the array
  expenses.push({ name, amount });

  // Clear the input fields
  expenseName.value = '';
  expenseAmount.value = '';

  // Update the UI
  renderExpenses();
}

// Function to render expenses
function renderExpenses() {
  // Clear the expense list
  expenseList.innerHTML = '';

  // Calculate total expenses
  let total = 0;

  // Loop through the expenses array and create list items
  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');

    expenseItem.innerHTML = `
      <span>${expense.name}: ₹${expense.amount.toFixed(2)}</span>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;

    expenseList.appendChild(expenseItem);
    total += expense.amount;
  });

  // Update the total expenses
  totalExpenses.textContent = `Total Expenses: ₹${total.toFixed(2)}`;
}

// Function to delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

// Event listener for the "Add Expense" button
addExpenseBtn.addEventListener('click', addExpense);

// Optional: Allow pressing "Enter" to add an expense
expenseAmount.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addExpense();
  }
});