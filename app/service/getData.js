const axios = require('axios');

// List all the current routes available with detail on each.
async function defaultInfo() {
  let list = {};
  const url = 'https://api.covid19api.com/';
  const getByDefault = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getByDefault();
  return list;
}

// A summary of new and total cases per country updated daily.
async function summaryByCountry() {
  let list = {};
  const url = 'https://api.covid19api.com/summary';
  const getSumInfoByCountry = async () => {
    try {
      const response = await axios({
        method: 'get',
        headers: {
          'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
        },
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getSumInfoByCountry();
  return list;
}

// Returns all the available countries and provinces, as well as the country slug for per country requests.
async function getCountries() {
  let list = {};
  const url = 'https://api.covid19api.com/countries';
  const getAllCountries = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getAllCountries();
  return list;
}

// Returns all cases by case type for a country from the first recorded case. Country must be the Slug from /countries or /summary.
// Cases must be one of: confirmed, recovered, deaths

async function getCountryInfoFromDayOne(slug, cas = 'confirmed') {
  let list = {};
  const url = `https://api.covid19api.com/dayone/country/${slug}/status/${cas}`;
  const getInfoFromDayOne = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoFromDayOne();
  return list;
}

// Returns all cases by case type for a country from the first recorded case. Country must be the Slug from /countries or /summary.
// Cases must be one of: confirmed, recovered, deaths
async function getDayOneAllStatus(slug) {
  let list = {};
  const url = `https://api.covid19api.com/dayone/country/${slug}`;
  const getDayOneInfoAllStatus = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getDayOneInfoAllStatus();
  return list;
}

// Returns all cases by case type for a country from the first recorded case with the latest record being the live count.
// Country must be the Slug from /countries or /summary. Cases must be one of: confirmed, recovered, deaths
async function getDayOneAnyStatusLive(slug, cas = 'confirmed') {
  let list = {};
  const url = `https://api.covid19api.com/dayone/country/${slug}/status/${cas}/live`;
  const getDayOneInfoAnyStatusLive = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getDayOneInfoAnyStatusLive();
  return list;
}

//Returns all cases by case type for a country from the first recorded case.
//Country must be the slug from /countries or /summary. Cases must be one of: confirmed, recovered, deaths

async function getOneTotal(slug, cas = 'confirmed') {
  let list = {};
  const url = `https://api.covid19api.com/total/dayone/country/${slug}/status/${cas}`;
  const getInfoOneTotal = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoOneTotal();
  return list;
}

//Returns all cases by case type for a country from the first recorded case.
//Country must be the slug from /countries or /summary. Cases must be one of: confirmed, recovered, deaths

async function getDayOneTotalAllStatus(slug) {
  let list = {};
  const url = `https://api.covid19api.com/total/dayone/country/${slug}`;
  const getDayOneInfoTotalAllStatus = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getDayOneInfoTotalAllStatus();
  return list;
}

//Returns all cases by case type for a country.
//Country must be the slug from /countries or /summary. Cases must be one of: confirmed, recovered, deaths

async function getByCountry(slug, cas = 'confirmed', from, to) {
  let list = {};
  const url = `https://api.covid19api.com/country/${slug}/status/${cas}`;
  const getInfoByCountry = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
        params: {
          from,
          to
        },
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoByCountry();
  return list;
}
//Returns all cases by case type for a country. Country must be the slug from /countries or /summary.
//Cases must be one of: confirmed, recovered, deaths
async function getByCountryAllStatus(slug, from, to) {
  let list = {};
  const url = `https://api.covid19api.com/country/${slug}`;
  const getInfoByCountryAllStatus = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
        params: {
          from,
          to
        },
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoByCountryAllStatus();
  return list;
}
//Returns all cases by case type for a country live. Country must be the slug from /countries or /summary.
//Cases must be one of: confirmed, recovered, deaths
async function getByCountryLive(slug, cas = 'confirmed', from, to) {
  let list = {};
  const url = `https://api.covid19api.com/country/${slug}/status/${cas}/live`;
  const getInfoByCountryLive = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
        params: {
          from,
          to
        },
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoByCountryLive();
  return list;
}

//Returns all cases by case type for a country. Country must be the slug from /countries or /summary.
// Cases must be one of: confirmed, recovered, deaths
async function getByCountryTotal(slug, cas = 'confirmed', from, to) {
  let list = {};
  const url = `https://api.covid19api.com/total/country/${slug}`;
  const getInfoByCountryTotal = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
        params: {
          from,
          to
        },
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoByCountryTotal();
  return list;
}

// Returns all cases by case type for a country. Country must be the slug from /countries or /summary.

async function getByCountryTotalAllStatus(slug) {
  let list = {};
  const url = `https://api.covid19api.com/total/country/${slug}`;
  const getInfoByCountryTotalAllStatus = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoByCountryTotalAllStatus();
  return list;
}

async function getWorldStatistics() {
  let list = {};
  const url = `https://api.covid19api.com/world`;
  const getInfoByCountryTotalAllStatus = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getInfoByCountryTotalAllStatus();
  return list;
}

async function getGMap() {
  // let key = 'AIzaSyCGBLwir5nz5K2UTtZc5c-7NCN2NzVuNoA';
  // const url = `https://maps.googleapis.com/maps/api/js`;
  const map = '';
  const getGoogleMap = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
        params: {
          key: 'AIzaSyCGBLwir5nz5K2UTtZc5c-7NCN2NzVuNoA',
          callback: 'initMap',
        }
      });
      map = response;
    } catch (e) {
      console.log(e);
    }
  };
  await getGoogleMap();
  return map;
}

async function getDataForMap() {
  let list = {};
  const url = `https://corona.lmao.ninja/v2/countries`;
  const getDataMap = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}`,
      });
      list = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getDataMap();
  return list;
}


export {
  getDataForMap,
  getGMap,
  getByCountryTotalAllStatus,
  getByCountryTotal,
  getByCountryLive,
  getByCountryAllStatus,
  getByCountry,
  getDayOneTotalAllStatus,
  defaultInfo,
  summaryByCountry,
  getCountries,
  getCountryInfoFromDayOne,
  getDayOneAllStatus,
  getDayOneAnyStatusLive,
  getOneTotal,
  getWorldStatistics,
};