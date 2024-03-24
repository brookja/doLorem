async function processLocalhostRequest(event, requestUrl) {
  try {
    // Perform fetch operation
    const response = await fetch(requestUrl, {
      method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        // Headers if required
      },
      body: null, // or JSON.stringify(data) for POST/PUT requests
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Process the response
    const data = await response.json(); // or response.text() if expecting text
    // Handle the processed data
    console.log(data);
  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error('Error during fetch:', error);
  }
}
