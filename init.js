const KEY_STORAGE = {
    PERSOL: "person"
}

// Create the object whole all data of person
window.localStorage.setItem(KEY_STORAGE.PERSOL, JSON.stringify({}));

const getCurrentPerson = () => {
    return JSON.parse(window.localStorage.getItem(KEY_STORAGE.PERSOL));
}

const setCurrentPerson = (data) => {
    window.localStorage.setItem(KEY_STORAGE.PERSOL, JSON.stringify(data))
}

const drawPerson = (bikiniTopImg) => {
    console.log('here', bikiniTopImg)
    if (bikiniTopImg) {
        let bikiniTopEl = document.getElementById("cyberBikiniTop");
        console.log('bikiniTopEl', bikiniTopEl)
        if (bikiniTopEl) {
            bikiniTopEl.style.background = `url("${bikiniTopImg}")`
            bikiniTopEl.style.backgroundRepeat = 'no-repeat';
            bikiniTopEl.style.backgroundSize = 'contain';
            bikiniTopEl.style.zIndex = 2;
        }
    }
}
const drawPersonBot = (bikiniBotImg) => {
    console.log('here', bikiniBotImg)
    if (bikiniBotImg) {
        let bikiniBotEl = document.getElementById("cyberBikiniBot");
        console.log('bikiniBotEl', bikiniBotEl)
        if (bikiniBotEl) {
            bikiniBotEl.style.background = `url("${bikiniBotImg}")`
            bikiniBotEl.style.backgroundRepeat = 'no-repeat';
            bikiniBotEl.style.backgroundSize = 'contain';
            bikiniBotEl.style.zIndex = 2;
        }
    }
}
const drawPersonNeck = (neckImg) =>{
    if (neckImg) {
        let neckEl = document.getElementById("cyberNecklace");
        if (neckEl) {
            neckEl.style.background = `url("${neckImg}")`
            neckEl.style.backgroundRepeat = 'no-repeat';
            neckEl.style.backgroundSize = 'contain';
            neckEl.style.zIndex = 3;
        }
    }
}

const drawPersonHair = (hairImg) =>{
    if (hairImg) {
        let hairEl = document.getElementById("cyberHairStyle");
        if (hairEl) {
            hairEl.style.background = `url("${hairImg}")`
            hairEl.style.backgroundRepeat = 'no-repeat';
            hairEl.style.backgroundSize = '1200px';
            hairEl.style.zIndex = 6;
        }
    }
}


const drawPersonHandBag = (handBagImg) =>{
    if (handBagImg) {
        let handBagEl = document.getElementById("cyberHandbag");
        if (handBagEl) {
            handBagEl.style.background = `url("${handBagImg}")`
            handBagEl.style.backgroundRepeat = 'no-repeat';
            handBagEl.style.backgroundSize = 'contain';
            handBagEl.style.zIndex = 5;
        }
    }
}

const drawPersonShoe= (shoeImg) =>{
    if (shoeImg) {
        let shoeEl = document.getElementById("cyberFeet");
        if (shoeEl) {
            shoeEl.style.background = `url("${shoeImg}")`
            shoeEl.style.backgroundRepeat = 'no-repeat';
            shoeEl.style.backgroundSize = 'contain';
            shoeEl.style.zIndex = 1;
        }
    }
}

const drawPersonBackGround= (backImg) =>{
    if (backImg) {
        let backEl = document.getElementById("cyberBackGround");
        if (backEl) {
            backEl.style.background = `url("${backImg}")`
            backEl.style.backgroundRepeat = 'no-repeat';
            backEl.style.backgroundSize = 'contain';
        }
    }
}


// add trigger event when storage change
window.addEventListener('storage', (e) => {
    console.log('day roi', e)
    const person = getCurrentPerson();
    drawPerson(person.bikiniTopImg)
    drawPersonBot(person.bikiniTopImg)
});