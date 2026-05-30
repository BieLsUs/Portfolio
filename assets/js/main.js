function profileInfoUpdate(infoProfileData){
    // 
    const photo = document.getElementById('perfil.photo')
    photo.src = infoProfileData.photo
    // 
    const name = document.getElementById('profile.name')
    name.innerText = infoProfileData.name

    // 
    const funcao = document.getElementById('profile.job')
    funcao.innerText = infoProfileData.job
    // 
    const endereco = document.getElementById('profile.location')
    endereco.innerText = infoProfileData.location
    // 
    const contato = document.getElementById('profile.phone')
    contato.innerText = infoProfileData.phone
    contato.href = `tel:${infoProfileData.phone}`
    // 
    const email = document.getElementById('profile.email')
    email.innerText = infoProfileData.email
    email.href = `mailto:${infoProfileData.email}`

}


// Função que imprime no console as informações da API;
(async () => {
    const infoProfileData = await fetchData();
    profileInfoUpdate(infoProfileData);
})()