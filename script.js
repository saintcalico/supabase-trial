document.addEventListener('DOMContentLoaded', function() {
  const SUPABASE_URL = 'https://kxoexwdhzcxmxzygwatq.supabase.co'; // Replace with your Supabase URL
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4b2V4d2RoemN4bXh6eWd3YXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MDk4MjAsImV4cCI6MjA1NTI4NTgyMH0.wXpVEFOOHHReYwJj6cDltmjy3Ff5MXG75lFhA_8xS78'; // Replace with your Supabase anon key

  const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  fetchOrders();

  async function fetchOrders() {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*');

      if (error) {
        console.error('Error fetching orders:', error);
        return;
      }

      displayOrders(data);
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  }

  function displayOrders(orders) {
    const tableBody = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];

    orders.forEach(order => {
      const row = tableBody.insertRow();
      Object.values(order).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  }
});