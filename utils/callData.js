// CALL DATA FROM Data.json


const fetchData = () => {
    return fetch("../data/Data.json")
        .then(res => res.json())
        .then(data => {
            showPillsData(data.navPills)
            showPanesDataTopClo(data.tabPanes)
            showPanesDataBotClo(data.tabPanes)
            showPanesDataShoe(data.tabPanes)
            showPanesDataHandBag(data.tabPanes)
            showPanesDatanecklaces(data.tabPanes)
            showPanesDatahairstyles(data.tabPanes)
            showPanesDatabackground(data.tabPanes)
        }
        )
        .catch(err => {
            console.log('loi', err);
        })
}  


fetchData()

// show topclo

window.addItem = () =>{
    return fetch("../data/Data.json")
    .then(res => res.json())
    .then(data =>{

    })
    .catch(err =>{
        console.log('loi',err);
    })
}



