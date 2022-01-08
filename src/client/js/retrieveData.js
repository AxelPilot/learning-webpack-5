/**
 * Retrieve data from the server.
 * @param {string} url 
 * @returns data retrieved from the server.
 */
export const retrieveData = async (url = '') => {
    const res = await fetch(url);
    try {
        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
};
