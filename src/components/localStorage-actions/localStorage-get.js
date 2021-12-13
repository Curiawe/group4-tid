function getLocalStorage(key){
    try {
        return localStorage.getItem(key)
    } catch {
        console.error(new Error("Error in localStorage-get.js. The key you tried to access does not exist."));
        return null;
    }
}

export default getLocalStorage