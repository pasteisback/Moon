// Script to handle Clear and Execute actions

document.getElementById('clearBtn').addEventListener('click', () => {
    const scriptBox = document.getElementById('scriptBox');
    scriptBox.value = ''; // Clear text area
});

document.getElementById('executeBtn').addEventListener('click', () => {
    const scriptBox = document.getElementById('scriptBox');
    const script = scriptBox.value.trim();

    if (script === '') {
        alert('Please enter a Lua script before executing.');
        return;
    }

    // Simulate execution (Replace this with API call or actual execution logic)
    console.log('Executing script:', script);
    alert('Script executed successfully!');
});
