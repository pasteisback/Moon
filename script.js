// Script to handle Clear, Execute, and Status functionality

const scriptBox = document.getElementById('scriptBox');
const clearBtn = document.getElementById('clearBtn');
const executeBtn = document.getElementById('executeBtn');
const statusDot = document.querySelector('.status .dot');
const statusText = document.querySelector('.status span:last-child');

// Simulate connection to the executor
function connectToExecutor() {
    setTimeout(() => {
        statusDot.style.background = '#49ff85'; // Green for "Connected"
        statusText.textContent = 'Connected';
        console.log('Executor connected.');
    }, 1000); // Simulated delay
}

// Clear the script box
clearBtn.addEventListener('click', () => {
    scriptBox.value = ''; // Clear text area
});

// Execute the Lua script
executeBtn.addEventListener('click', () => {
    const script = scriptBox.value.trim();

    if (script === '') {
        alert('Please enter a Lua script before executing.');
        return;
    }

    // Replace this with actual Lua execution logic
    console.log('Executing script:', script);

    // Simulated success message
    alert('Script executed successfully!');
});

// Connect to the executor on page load
connectToExecutor();
