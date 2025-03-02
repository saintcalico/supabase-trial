// script.js
const SUPABASE_URL = 'https://kxoexwdhzcxmxzygwatq.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4b2V4d2RoemN4bXh6eWd3YXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MDk4MjAsImV4cCI6MjA1NTI4NTgyMH0.wXpVEFOOHHReYwJj6cDltmjy3Ff5MXG75lFhA_8xS78'; // Replace with your Supabase Anon Key

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Gather form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
    };

    try {
        // Insert data into Supabase
        const { error } = await supabase
            .from('orders') // Replace 'orders' with your table name
            .insert([formData]);

        if (error) {
            console.error('Error inserting data:', error);
            alert('An error occurred while placing your order. Please try again.');
            return;
        }

        // Show confirmation message
        alert(`Thank you, ${formData.firstName}! Your order has been placed successfully.`);
        window.location.href = 'index.html'; // Redirect to homepage

    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
});