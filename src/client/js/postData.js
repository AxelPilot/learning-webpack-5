/**
 * Post data to the server.
 * @param {string} url 
 * @param {Object} data to be posted to the server.
 * @returns server response.
 */
 export const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
