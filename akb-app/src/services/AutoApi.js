import axios from "axios";

//{address_icon: 'rrr', datefield1: '2023-02-10', datefield2: '2023-02-12'}
export function AutoApiF(credentials) {
  return axios.post("http://localhost:8083/RequestReservation", {
    dateDebut: credentials.datefield1,
    dateFin: credentials.datefield2,
    addressePrise: credentials.address_icon,
  });
}

export function AutoApiFTest() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
