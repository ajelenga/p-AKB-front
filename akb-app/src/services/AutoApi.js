import axios from 'axios';
import {useEffect, useState} from "react";
import {CarsDatesDetails} from "../pages/CarsDatesDetails";

//{address_icon: 'rrr', datefield1: '2023-02-10', datefield2: '2023-02-12'}
export default function AutoApi(credentials) {
    /*
    const getData = () => {
        axios
            .post('http://localhost:8083/RequestReservation', {
                dateDebut: credentials.datefield1,
                dateFin: credentials.datefield2,
                addressePrise: credentials.address_icon,
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }*/
    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => console.log(res.data))
            .catch((err) =>
                console.log(err)
            );
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {
                data.map((items) =>
                    <CarsDatesDetails key={items.id}/>
                )
            }

        </>
    )
}
