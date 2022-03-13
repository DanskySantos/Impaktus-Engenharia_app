import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../utils/requests";

function ProviderShowPage() {

    const params = useParams();

    const [loading, setLoading] = useState(true)
    const [providers, setProviders] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/provider/findByCategory/${params.categoryId}`).then(response => {
            setProviders([])
            setProviders(response.data)
            console.log(response.data);
            setLoading(false)

        });
    }, [params.categoryId])

    const [pageNumber, setPageNumber] = useState(0);

    return (

        <>
            { loading?
                ('Loading...')
                :
                (
            <div className='container'>
                {
                    providers.map((provider:any) => {
                        return (
                            <div key={provider.id} className= "row">
                                <div className={"presentation h2 mt-5"}>{provider.name}</div>
                                <div className={"presentation mt-3"}>CNPJ/CPF: {provider.cnpj}</div>
                                <div className={"presentation"}>E-mail: {provider.email}</div>
                                <div className={"presentation"}>Telefone: {provider.phone}</div>
                                <div className={"presentation"}>Celular: {provider.cellphone}</div>
                                <div className={"presentation"}>Endereço: {provider.address}</div>
                                <div className={"presentation"}>Contato: {provider.contact}</div>
                                <div className={"presentation"}>Id: {provider.id}</div>
                            </div>
                        )
                    })
                }
            </div>
                )
            }
        </>
    );
}

export default ProviderShowPage;