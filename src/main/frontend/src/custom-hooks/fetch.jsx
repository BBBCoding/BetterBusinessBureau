fetch('http://localhost:8080/api/v1/movies')
    .then(response => response.json())
    .then(data => console.log(data))
