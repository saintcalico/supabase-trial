const SUPABASE_URL = 'https://kxoexwdhzcxmxzygwatq.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4b2V4d2RoemN4bXh6eWd3YXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MDk4MjAsImV4cCI6MjA1NTI4NTgyMH0.wXpVEFOOHHReYwJj6cDltmjy3Ff5MXG75lFhA_8xS78'; 

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 

document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      first_name: document.getElementById('firstName').value, // Use the correct column name
      last_name: document.getElementById('lastName').value,  // Use the correct column name
  };

    try {
        // Use supabaseClient here
        const { error } = await supabaseClient 
            .from('orders')
            .insert([formData]);

        if (error) {
            console.error('Error inserting data:', error);
            alert('An error occurred while placing your order. Please try again.');
            return;
        }

        alert(`Thank you, ${formData.firstName}! Your order has been placed successfully.`);
        window.location.href = 'index.html'; 

    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
    console.log('Supabase client:', supabaseClient); 
});