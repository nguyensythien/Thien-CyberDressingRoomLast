

const showPanesDataTopClo = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        if(data.type === 'topclothes'){
            htmlContent +=`
            <div class="tabItem" id="${data.id}" type="${data.type}">
            <img src="${data.imgSrc_jpg}" alt="">
            <p>${data.name}</p>
            <button class="topclothers-btn" data-value=${data.imgSrc_png} onclick="addItem(${data.id})">Thử Đồ</button>
            </div>       
            `
        }
    });
    document.getElementById('cybertopcloth').innerHTML = htmlContent
    const els =Array.from(document.getElementsByClassName("topclothers-btn"))
    els.forEach((el) => {
        el.addEventListener("click", (e) => {
            const imgTopC = e.target.dataset.value;
            let person = getCurrentPerson();
            person.bikiniTopImg = imgTopC;
            setCurrentPerson(person);
            drawPerson(person.bikiniTopImg)
        });
    })
}
// show botclo List
const showPanesDataBotClo = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        if(data.type === 'botclothes'){
            htmlContent +=`
            <div class="tabItem" id="${data.id}" type="${data.type}">
            <img src="${data.imgSrc_jpg}" alt="">
            <p>${data.name}</p>
            <button class="botclothers-btn" data-value=${data.imgSrc_png} onclick="addItem(${data.id})">Thử Đồ</button>
            </div>       
            `
        }
    });
    document.getElementById('cyberbotcloth').innerHTML = htmlContent
    const els= Array.from(document.getElementsByClassName("botclothers-btn"))
    els.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            const imgBotC = e.target.dataset.value;
            let person = getCurrentPerson();
            person.bikiniBotImg = imgBotC
            setCurrentPerson(person);
            drawPersonBot( person.bikiniBotImg)
        })
    })
}
// show Shoe List
const showPanesDataShoe = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        if(data.type === 'shoes'){
            htmlContent +=`
            <div class="tabItem" id="${data.id}" type="${data.type}">
            <img src="${data.imgSrc_jpg}" alt="">
            <p>${data.name}</p>
            <button class="shoes-btn" data-value=${data.imgSrc_png} onclick="addItem(${data.id})">Thử Đồ</button>
            </div>       
            `
        }
    });
    document.getElementById('cybershoes').innerHTML = htmlContent
    const els= Array.from(document.getElementsByClassName("shoes-btn"))
    els.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            const imgShoes = e.target.dataset.value;
            let person = getCurrentPerson();
            person.shoeImg = imgShoes
            setCurrentPerson(person);
            drawPersonShoe( person.shoeImg)
        })
    })
}
// show HandBag List
const showPanesDataHandBag = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        if(data.type === 'handbags'){
            htmlContent +=`
            <div class="tabItem" id="${data.id}" type="${data.type}">
            <img src="${data.imgSrc_jpg}" alt="">
            <p>${data.name}</p>
            <button class="handBag-btn" data-value=${data.imgSrc_png} onclick="addItem(${data.id})">Thử Đồ</button>
            </div>       
            `
        }
    });
    document.getElementById('cyberhandbag').innerHTML = htmlContent
    const els= Array.from(document.getElementsByClassName("handBag-btn"))
    els.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            const imgHandBag = e.target.dataset.value;
            let person = getCurrentPerson();
            person.handBagImg = imgHandBag
            setCurrentPerson(person);
            drawPersonHandBag( person.handBagImg)
        })
    })
}
// show necklaces List
const showPanesDatanecklaces = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        if(data.type === 'necklaces'){
            htmlContent +=`
            <div class="tabItem" id="${data.id}" type="${data.type}">
            <img src="${data.imgSrc_jpg}" alt="">
            <p>${data.name}</p>
            <button class="neckless-btn" data-value=${data.imgSrc_png} onclick="addItem(${data.id})">Thử Đồ</button>
            </div> 
            </div>       
            `
        }
    });
    document.getElementById('cybernecklace').innerHTML = htmlContent
    const els= Array.from(document.getElementsByClassName("neckless-btn"))
    els.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            const imgNeckC = e.target.dataset.value;
            let person = getCurrentPerson();
            person.neckImg = imgNeckC
            setCurrentPerson(person);
            drawPersonNeck( person.neckImg)
        })
    })
}
// show hairstyle List
const showPanesDatahairstyles = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        if(data.type === 'hairstyle'){
            htmlContent +=`
            <div class="tabItem" id="${data.id}" type="${data.type}">
            <img src="${data.imgSrc_jpg}" alt="">
            <p>${data.name}</p>
            <button class="hairStyle-btn" data-value=${data.imgSrc_png} onclick="addItem(${data.id})">Thử Đồ</button>
            </div>       
            `
        }
    });
    document.getElementById('cyberhairstyle').innerHTML = htmlContent
    const els= Array.from(document.getElementsByClassName("hairStyle-btn"))
    els.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            const imgHairC = e.target.dataset.value;
            let person = getCurrentPerson();
            person.hairImg = imgHairC
            setCurrentPerson(person);
            drawPersonHair( person.hairImg)
        })
    })
}
// show background List
const showPanesDatabackground = (arrData)=>{
    let htmlContent = ''
    arrData.forEach((data) => {
        if(data.type === 'background'){
            htmlContent +=`
            <div class="tabItem" id="${data.id}" type="${data.type}">
            <img src="${data.imgSrc_jpg}" alt="">
            <p>${data.name}</p>
            <button class="backGround-btn" data-value=${data.imgSrc_png} onclick="addItem(${data.id})">Thử Đồ</button>
            </div>       
            `
        }
    });
    document.getElementById('cyberbackground').innerHTML = htmlContent
    const els= Array.from(document.getElementsByClassName("backGround-btn"))
    els.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            const imgBackG = e.target.dataset.value;
            let person = getCurrentPerson();
            person.backImg = imgBackG
            setCurrentPerson(person);
            drawPersonBackGround( person.backImg)
        })
    })
}

















































// ON-OFF ITEM-LIST

const getElm = (selector) => document.querySelector(selector);

// on topClo
window.ontopclothes = () =>{
    getElm('#cybertopcloth').style.display = 'flex'
    getElm('#cyberbotcloth').style.display = 'none'
    getElm('#cybershoes').style.display = 'none'
    getElm('#cyberhandbag').style.display = 'none'
    getElm('#cybernecklace').style.display = 'none'
    getElm('#cyberhairstyle').style.display = 'none'
    getElm('#cyberbackground').style.display = 'none'
}
// on botClo
window.onbotclothes = () =>{
    getElm('#cybertopcloth').style.display = 'none'
    getElm('#cyberbotcloth').style.display = 'flex'
    getElm('#cybershoes').style.display = 'none'
    getElm('#cyberhandbag').style.display = 'none'
    getElm('#cybernecklace').style.display = 'none'
    getElm('#cyberhairstyle').style.display = 'none'
    getElm('#cyberbackground').style.display = 'none'
}
// on botshoe
window.onshoes = () =>{
    getElm('#cybertopcloth').style.display = 'none'
    getElm('#cyberbotcloth').style.display = 'none'
    getElm('#cybershoes').style.display = 'flex'
    getElm('#cyberhandbag').style.display = 'none'
    getElm('#cybernecklace').style.display = 'none'
    getElm('#cyberhairstyle').style.display = 'none'
    getElm('#cyberbackground').style.display = 'none'
}
// on handbags
window.onhandbags = () =>{
    getElm('#cybertopcloth').style.display = 'none'
    getElm('#cyberbotcloth').style.display = 'none'
    getElm('#cybershoes').style.display = 'none'
    getElm('#cyberhandbag').style.display = 'flex'
    getElm('#cybernecklace').style.display = 'none'
    getElm('#cyberhairstyle').style.display = 'none'
    getElm('#cyberbackground').style.display = 'none'
}
// on necklaces
window.onnecklaces = () =>{
    getElm('#cybertopcloth').style.display = 'none'
    getElm('#cyberbotcloth').style.display = 'none'
    getElm('#cybershoes').style.display = 'none'
    getElm('#cyberhandbag').style.display = 'none'
    getElm('#cybernecklace').style.display = 'flex'
    getElm('#cyberhairstyle').style.display = 'none'
    getElm('#cyberbackground').style.display = 'none'
}
// on hairstyle
window.onhairstyle = () =>{
    getElm('#cybertopcloth').style.display = 'none'
    getElm('#cyberbotcloth').style.display = 'none'
    getElm('#cybershoes').style.display = 'none'
    getElm('#cyberhandbag').style.display = 'none'
    getElm('#cybernecklace').style.display = 'none'
    getElm('#cyberhairstyle').style.display = 'flex'
    getElm('#cyberbackground').style.display = 'none'
}
// on background
window.onbackground = () =>{
    getElm('#cybertopcloth').style.display = 'none'
    getElm('#cyberbotcloth').style.display = 'none'
    getElm('#cybershoes').style.display = 'none'
    getElm('#cyberhandbag').style.display = 'none'
    getElm('#cybernecklace').style.display = 'none'
    getElm('#cyberhairstyle').style.display = 'none'
    getElm('#cyberbackground').style.display = 'flex'
}
