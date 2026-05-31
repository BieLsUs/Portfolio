function profileInfoUpdate(infoProfileData){
    // 
    const photo = document.getElementById('profile.photo')
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
// 
function profileSkillsUpdate(infoProfileData){
    const softSkills = document.getElementById("profile.softSkills")
    softSkills.innerHTML = infoProfileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}
//
function profileHardSkillsUpdate(infoProfileData){
    const hardSkills = document.getElementById("profile.hardSkills")

    hardSkills.innerHTML = infoProfileData.skills.hardSkills.map(hard => 
        `<li>
            <img src="${hard.logo}" alt="${hard.name}">
        </li>`).join('')
}


// Função que imprime no console as informações da API;
(async () => {
    const infoProfileData = await fetchData();
    profileInfoUpdate(infoProfileData);
    profileSkillsUpdate(infoProfileData);
    profileHardSkillsUpdate(infoProfileData);
})()