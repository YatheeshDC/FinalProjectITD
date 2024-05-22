// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/api/sell-property', (req, res) => {
    const formData = req.body;

    // Save form data to a JSON file
    saveFormData(formData);

    res.status(200).json({ message: 'Form data received successfully', formData });
});

// Function to save form data to a JSON file
function saveFormData(formData) {
    const filePath = path.join(__dirname, 'form_data.json');

    // Read existing data from file
    let data = [];
    try {
        data = JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
        console.error('Error reading file:', error);
    }

    // Add new form data
    data.push(formData);

    // Write updated data back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
