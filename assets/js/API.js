// Função assincrona que realiza um requisição fetch com a API criada;
async function fetchData() {
    URL = 'https://raw.githubusercontent.com/BieLsUs/Portfolio/refs/heads/main/data/profile.json';
    const response = await fetch(URL);
    return await response.json();

}