// api.js or similar file in the frontend
export const addActionItem = async (data) => {
    const response = await fetch('http://localhost:5000/api/action-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Send the form data as JSON
    });
  
    if (!response.ok) {
      throw new Error('Error adding action item');
    }
  
    return response.json(); // Return the created action item
  };
  