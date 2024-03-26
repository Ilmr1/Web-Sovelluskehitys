async function makeRequest(method, url, body = null) {
    try {
        const options = {
            method,
            headers: body ? { 'Content-Type': 'application/json' } : {},
            body: body ? JSON.stringify(body) : null
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

makeRequest('GET', 'https://reqres.in/api/unknown/23');

makeRequest('POST', 'https://reqres.in/api/unknown/23', { name: 'John Doe', job: 'Software Developer' });

makeRequest('PUT', 'https://reqres.in/api/unknown/23', { name: 'John Doe', job: 'Software Developer' });

makeRequest('DELETE', 'https://reqres.in/api/unknown/23');