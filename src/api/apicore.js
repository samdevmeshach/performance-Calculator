export const getData = () => {
    return fetch(`http://localhost:5000`, {
        method :"GET",
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}
export const getRelease = () => {
    return fetch(`http://localhost:5000/release`, {
        method :"GET",
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}
export const getEnvironment = () => {
    return fetch(`http://localhost:5000/environment`, {
        method :"GET",
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}