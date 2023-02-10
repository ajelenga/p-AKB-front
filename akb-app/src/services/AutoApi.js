import axios from 'axios';

//{address_icon: 'rrr', datefield1: '2023-02-10', datefield2: '2023-02-12'}
export function carsDates(credentials) {
    const [tests,setTest] = useState([])
    useEffect(() => {
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
    })
    return(
        {
            tests.map(test => (
                    key={test.id}
            ))
        }
    )
        
}
