import './styles.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios, {AxiosRequestConfig} from "axios";
import {BASE_URL} from "../../utils/requests";


function CategoryRegister() {

    const navigate = useNavigate();

    const [name, setName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/category',
            data: {
                name: {name}.name
            }
        }
        axios(config).then(response => {
            navigate("/")
        })
    }

    return(
        <div className="dsmovie-form-container">
            <div className="dsmovie-card-bottom-container">
                <h3>Cadastro de Categoria</h3>
                <form onSubmit = {handleSubmit}>
                    <div className = "input-box">
                    <input className = "input-box" placeholder={'Digite o nome da categoria'} onChange = {(e) => setName(e.target.value)} value = {name}></input>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type='submit' className="btn btn-primary dsmovie-btn mt-5">Cadastrar</button>
                    </div>
                </form>
            </div >
        </div >
    );

}

export default CategoryRegister;