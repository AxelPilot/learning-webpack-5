export const handleSubmit = (event) => {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);
    Client.apiCall(formText);

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(res => {
        document.getElementById('results').innerHTML = res.message;
    });
}
