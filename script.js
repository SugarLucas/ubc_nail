document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    if (service && date) {
        alert(`Your appointment for a ${service} on ${date} has been booked!`);
        // Here, you could add code to send this data to a server
    } else {
        alert('Please fill in all fields.');
    }
});
