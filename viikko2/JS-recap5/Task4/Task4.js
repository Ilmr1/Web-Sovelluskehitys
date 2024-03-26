async function fetchData(url = '', options = {}) {
    const response = await fetch(url, options);
    return response.json();
}

try {
    const user = {
        name: 'John Doe',
        job: 'Developer'
    };
    const url = 'https://reqres.in/api/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    fetchData(url, options).then((data) => {
        console.log(data);
    });
} catch (error) {
    console.error('There has been a problem with your fetch operation: ', error);
}