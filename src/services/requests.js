const axios = require("axios").default;

//This is the Api url that will be called on the backend
const API_URL = "https://api.staging.bsport.io/api/v1";

//Header config for Authorization
axios.defaults.headers.common["Authorization"] =
    "Token f18688960a8942c83d238b04e88389ac126bf55c";

//Usefull function to fetch the data asynchronously inside components
async function fetchData(objectId,getFunction,setState) {
    let foundElement
    try{
        foundElement = await getFunction(objectId)
    }catch(error) {
        console.error(error);
    }
    setState(foundElement)
}

//Call the different endpoints
//GET all the offers
async function getAllOffers(date) {
    let offers
    try{
        offers = await axios
        .get(`${API_URL}/offer`, {
            params: { company: 6, min_date: date, max_date: date },
        })
    }catch(error) {
        console.error(error);
    }
    return offers.data
}

//GET the meta-activity
function getMetaActivity(metaId) {
    axios
        .get(`${API_URL}/meta-activity/${metaId}`)
        .then((foundMetaActivity) => {
            return foundMetaActivity.data;
        })
        .catch((err) => console.log(err));
    }

//GET the company
function getCompany(companyId) {
    axios
        .get(`${API_URL}/company/${companyId}`)
        .then((foundCompany) => {
            return foundCompany.data;
        })
        .catch((err) => console.log(err));
}

//GET the coach
function getCoach(coachId) {
    axios
        .get(`${API_URL}/coach/${coachId}`)
        .then((foundCoach) => {
            return foundCoach.data;
        })
        .catch((err) => console.log(err));
}

//GET the establishment
function getEstablishment(establishmentId) {
    axios
        .get(`${API_URL}/establishment/${establishmentId}`)
        .then((foundEstablishment) => {
            return foundEstablishment.data;
        })
        .catch((err) => console.log(err));
}

export {
    fetchData,
    getAllOffers,
    getCoach,
    getCompany,
    getEstablishment,
    getMetaActivity,
};
