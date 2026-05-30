function profileInfoUpdate(infoProfileData){
    const photo = document.getElementById('perfil.photo')
    photo.src = infoProfileData.photo
}


// Função que imprime no console as informações da API;
(async () => {
    const infoProfileData = await fetchData();
    profileInfoUpdate(infoProfileData);
})()