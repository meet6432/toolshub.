const fetch = require('node-fetch'); // Use fetch to make API requests

const API_KEY = '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'; // Replace with your Hugging Face API key

async function generateBusinessNames(keywords, style) {
    const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`, // Add your API key here
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputs: `Generate unique business names for a company related to ${keywords}. The style should be ${style}.`,
        }),
    });

    const data = await response.json();
    
    // Check for any errors
    if (response.status !== 200) {
        console.error('Error:', data);
        return;
    }

    // Output the generated business names
    console.log('Generated Business Names:', data);
}

// Test the function with sample inputs
generateBusinessNames('technology startup', 'creative');
