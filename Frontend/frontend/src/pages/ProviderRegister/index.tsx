import './styles.css'
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios, {AxiosRequestConfig} from "axios";
import {BASE_URL} from "../../utils/requests";

function ProviderRegister() {

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState('')
    const [category, setCategory] = useState([]);
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    const categorySelected = Number;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //
        // var data = []
        // data.push({id:selectedCategory})
        // console.log(data)

        var dataCategory = [
            {
                id:selectedCategory,
                // name:""
            }

        ]

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: './provider',
            data: {
                categories: {dataCategory}.dataCategory,
                name: {name}.name,
                cnpj: {cnpj}.cnpj,
                email: {email}.email,
                phone: {phone}.phone,
                cellphone: {cellphone}.cellphone,
                address: {address}.address,
                contact: {contact}.contact
            }
        }
        axios(config).then(response => {
            navigate("/")
        })
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/category/findAll`).then(response => {
            setCategory([])
            setCategory(response.data)
            console.log(response.data);
            setLoading(false)

        });
    }, [])

    function selectCategory(e:any) {
        if (e.target.value == '0') {
            console.log('Selecione uma opçao valida')
        } else {
            setSelectedCategory(e.target.value)
            console.log(e.target.value)
        }
    }

    return (
        <>
            { loading?
                ('Loading...')
                :
                (
                    <>
                        <div className="dsmovie-form-container">
                            <div className="dsmovie-card-bottom-container">
                                <h3>Entre com os dados do Fornecedor</h3>
                                <form onSubmit = {handleSubmit}>

                                    <div className = "input-box">
                                        <input className = "input-box" placeholder={'Digite o nome'} onChange = {(e) => setName(e.target.value)} value = {name}></input>
                                    </div>
                                    <div className = "input-box">
                                        <input className = "input-box" placeholder={'Digite o CNPJ/CPF'} onChange = {(e) => setCnpj(e.target.value)} value = {cnpj}></input>
                                    </div>
                                    <div className = "input-box">
                                        <input className = "input-box" placeholder={'Digite o e-mail'} onChange = {(e) => setEmail(e.target.value)} value = {email}></input>
                                    </div>
                                    <div className = "input-box">
                                        <input className = "input-box" placeholder={'Digite o telefone'} onChange = {(e) => setPhone(e.target.value)} value = {phone}></input>
                                    </div>
                                    <div className = "input-box">
                                        <input className = "input-box" placeholder={'Digite o celular'} onChange = {(e) => setCellphone(e.target.value)} value = {cellphone}></input>
                                    </div>
                                    <div className = "input-box">
                                        <input className = "input-box" placeholder={'Digite o endereço'} onChange = {(e) => setAddress(e.target.value)} value = {address}></input>
                                    </div>
                                    <div className = "input-box">
                                        <input className = "input-box" placeholder={'Digite o contato'} onChange = {(e) => setContact(e.target.value)} value = {contact}></input>
                                    </div>
                                    <div className = "input-box">
                                            <select className = "input-box" onChange={selectCategory}>
                                                <option key={"0"} >Selecione a categoria do fornecedor</option>
                                                {
                                                    category.map((cat:any) => {
                                                        return (
                                                            <option key={cat.id} value={cat.id}> {cat.name}</option>
                                                        )})
                                                }
                                            </select>
                                    </div>
                                    <div className="dsmovie-form-btn-container">
                                        <button type='submit' className="btn btn-primary dsmovie-btn mt-5">Cadastrar</button>
                                    </div>
                                </form >
                                <Link to="/category/register">
                                    <button className="btn btn-primary dsmovie-btn mt-3">Voltar</button>
                                </Link>
                            </div >
                        </div >
                    </>
                )
            }
        </>
    );

}

export default ProviderRegister;