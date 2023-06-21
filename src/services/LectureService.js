import { HttpService } from "./HttpService"

const LECTURES_KEY = 'lecturesDB'

const query = async (filterBy) => {
    const lectures = await HttpService.query(LECTURES_KEY)
    return filter(lectures, filterBy)
}

const filter = (items, filterBy) => {
    let filteredItems = [...items]
    if (filterBy.topic) filteredItems = filteredItems.filter(item => item.topics.includes(filterBy.topic))
    if (filterBy.areas.length) filteredItems = filteredItems.filter(item => filterBy.areas.includes(item.area))
    return filteredItems
}

const createLectures = () => {
    const lectures = [
        {
            _id: 'l101',
            name: 'בריאות וכושר',
            fields: ['כושר', 'בריאות'],
            lecturer: {
                name: "דני סנדרסון"
            },
            thumbnail: 'https://static.wixstatic.com/media/9a28fc_23348421843d471ba7f7732071d66ec5~mv2.jpg/v1/fill/w_381,h_481,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9a28fc_23348421843d471ba7f7732071d66ec5~mv2.jpg'
        },
        {
            _id: 'l102',
            name: 'סנכרון עצמי',
            fields: ['נפשי', 'קבלה'],
            lecturer: {
                name: "רבקה מיכאלי"
            },
            thumbnail: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80'
        },
        {
            _id: 'l103',
            name: 'הבנת האחר',
            fields: ['הכלה', 'פילוסופיה'],
            lecturer: {
                name: "רביד פלוטניק"
            },
            thumbnail: 'https://randomwordgenerator.com/img/picture-generator/chair-1840011_640.jpg'
        },
        {
            _id: 'l104',
            name: 'העולם ומעבר לו',
            fields: ['אסטרולוגיה'],
            lecturer: {
                name: "שלום חנוך"
            },
            thumbnail: 'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            _id: 'l105',
            name: 'אנחנו חייזרים?',
            fields: ['פילוסופיה', 'מחקר'],
            lecturer: {
                name: "טל פרידמן"
            },
            thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
        },
        {
            _id: 'l106',
            name: 'ההשפעות של הטכנולוגיה',
            fields: ['טכנולוגיה', 'בריאות'],
            lecturer: {
                name: "ארקדי דוכין"
            },
            thumbnail: 'https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg'
        }
    ]
    const currLectures = localStorage.getItem(LECTURES_KEY)
    if (!currLectures) localStorage.setItem(LECTURES_KEY, JSON.stringify(lectures))
}

createLectures()

export const LectureService = {
    query
}