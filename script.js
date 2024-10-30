document.getElementById('cvForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;

    // Store form data in an object
    const cvData = {
        name,
        email,
        phone,
        experience,
        skills,
        education
    };

    // Save data to local storage (for demo)
    localStorage.setItem('cvData', JSON.stringify(cvData));

    // Display confirmation message
    document.getElementById('responseMessage').textContent = 
        'Thank you! Your information has been submitted successfully.';

    // Clear form fields
    document.getElementById('cvForm').reset();
});
