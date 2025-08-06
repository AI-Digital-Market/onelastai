// Quick API test for debugging
const testAPI = async () => {
  try {
    const response = await fetch('/api/ai-agent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        serviceType: 'chat',
        prompt: 'Hello, this is a test message',
        userId: 'demo-user',
        options: {}
      }),
    });

    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { error: error.message };
  }
};

// You can run this in the browser console
testAPI();
