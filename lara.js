// Function to switch between sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.style.display = 'none'); // Hide all sections
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}

// Function to perform the number conversion
function convertNumber() {
    const number = document.getElementById('number').value;
    if (number === '') {
        document.getElementById('decimal-box').innerText = 'Decimal: ';
        document.getElementById('binary-box').innerText = 'Binary: ';
        document.getElementById('octal-box').innerText = 'Octal: ';
        document.getElementById('hexadecimal-box').innerText = 'Hexadecimal: ';
        return;
    }
    const decimal = parseInt(number, 10);
    const binary = decimal.toString(2);
    const octal = decimal.toString(8);
    const hexadecimal = decimal.toString(16).toUpperCase();
    document.getElementById('decimal-box').textContent = `decimal: ${binary}`;
    document.getElementById('binary-box').textContent = `binary: ${binary}`;
    document.getElementById('octal-box').textContent = `octal: ${octal}`;
    document.getElementById('hexadecimal-box').textContent = `hexadecimal-box: ${hexadecimal}`;
}

// Submit feedback
function submitFeedback(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
}