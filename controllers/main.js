const showPillsData = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        htmlContent += `
        <li class="${data.tabName}" type="${data.type}"><button onclick="on${data.type}()">${data.showName}</button></li>       
        `
    });
    document.getElementById('cyberNavPills').innerHTML = htmlContent
}

