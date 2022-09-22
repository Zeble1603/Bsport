const axios = require("axios").default;

//This is the Api url that will be called on the backend
const API_URL = "https://api.staging.bsport.io/api/v1";

//Header config for Authorization
axios.defaults.headers.common["Authorization"] =
    "Token f18688960a8942c83d238b04e88389ac126bf55c";

//Call the different endpoints
//GET all the offers
function getAllOffers(dates) {
    axios
    .get(`${API_URL}/offer`, {
        params: { company: 6, min_date: dates.min_date, max_date: dates.max_date },
    })
    .then((allOffers) => {
        return allOffers.data;
    })
    .catch((err) => console.log(err));
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
    getAllOffers,
    getCoach,
    getCompany,
    getEstablishment,
    getMetaActivity,
};
