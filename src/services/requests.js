const axios = require("axios").default;

//This is the Api url that will be called on the backend
const API_URL = "https://api.staging.bsport.io/api/v1";

//Header config for Authorization
axios.defaults.headers.common["Authorization"] =
    "Token f18688960a8942c83d238b04e88389ac126bf55c";


//Usefull function to fetch the data asynchronously inside components
async function fetchData(objectId, getFunction, setState) {
    let foundElement;
    try {
        foundElement = await getFunction(objectId);
    } catch (error) {
        console.error(error);
    }
    setState(foundElement);
}

async function fetchObjects(datas, getFunction, setState) {
    if(datas.length){
        let allDatas = []
        let foundData;

        for(const data of datas){
            try {
                foundData = await getFunction(data);
            } catch (error) {
                console.error(error);
            }
            allDatas.push(foundData)
        }
        setState(allDatas);
    }
    
}

//Call the different endpoints
//GET all the offers
async function getAllOffers(date,page) {
    let offers;
    try {
        offers = await axios.get(`${API_URL}/offer/`, {
        params: { company: 6, min_date: date, max_date: date,page_size:5, page },
        });
    } catch (error) {
        console.error(error);
    }
    return offers.data;
}

//GET the meta-activity
async function getMetaActivity(metaId) {
    let metaActivity;
    try {
        metaActivity = await axios.get(`${API_URL}/meta-activity/${metaId}/`);
    } catch (error) {
        console.error(error);
    }
    return metaActivity.data;
}

//GET the company
async function getCompany(companyId) {
    let company;
    try {
        company = await axios.get(`${API_URL}/company/${companyId}/`);
    } catch (error) {
        console.error(error);
    }
    return company.data;
}

//GET the coach
async function getCoach(coachId) {
    let coach;
    try {
        coach = await axios.get(`${API_URL}/coach/${coachId}/`);
    }catch (error) {
        console.error(error);
    }
    return coach.data;
}

//GET the establishment
async function getEstablishment(establishmentId) {
    let establishment;
    try {
        establishment = await axios.get(
        `${API_URL}/establishment/${establishmentId}/`
        );
    } catch (error) {
        console.error(error);
    }
    return establishment.data;
}

//GET members
function getMember(bookingId) {
    axios.get(`${API_URL}/booking/${bookingId}/`)
    .then(booking=>{
        return axios.get(`${API_URL}/member/${booking.data.member}/`)
    })
    .then(member=> member.data)
    .catch(err=>{console.log(err)})
}



export {
    fetchData,
    fetchObjects,
    getAllOffers,
    getCoach,
    getCompany,
    getEstablishment,
    getMetaActivity,
    getMember
};
