export const apiCall = (zipCode) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    let apiKey;

    // Retrieve API key from the server.
    fetch('/apiKeys')
    .then(res => res.json())
    .then((res) => {
        apiKey = res.API_KEY;

        fetch(`${baseURL}?zip=${zipCode},us&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then((res) => {
            if (res.cod != 200) {
                alert(
                    res.message.charAt(0).toUpperCase() +
                    res.message.slice(1) + '. Please try again.');
            } else {
                document.getElementById('results2').innerHTML =
                    `The temperature in ${res.name}, ${res.sys.country} is: ${res.main.temp}°C`;
            }
        });
    });

}
