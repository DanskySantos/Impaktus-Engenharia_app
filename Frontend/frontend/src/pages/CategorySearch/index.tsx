import './styles.css'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {useEffect, useState} from "react";
import category from "../Category";

function CategorySearch() {

    const [loading, setLoading] = useState(true);

    const params = useParams();

    const categoriesDefault = useState('0')

    const [categories, setCategories] = useState([])

    const [currentCategory, setCurrentCategory] = useState('')

    function sendForm() {
        axios.get(`${BASE_URL}/provider/findByCategory/${currentCategory}`).then(response => {
            console.log(response.data);
        });
    }

    function updateCategories(e:any) {
        if (e.target.value == '0') {
            console.log('Selecione uma opçao valida')
        } else {
            setCurrentCategory(e.target.value)
            console.log(e.target.value)
        }
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/category/findAll`).then(response => {
            setCategories([])
            setCategories(response.data)
            console.log(response.data);
            setLoading(false)

        });
    }, [])

    return (
        <>
            { loading?
                ('Loading...')
                :
                (
                    <>
                        <div className="dsmovie-form-container">
                            <div className="dsmovie-card-bottom-container">
                                <h3>{"Pesquisa por categoria"}</h3>
                                <div className="input-box">
                                <form className="dsmovie-form">
                                    <div className="form-group dsmovie-form-group">
                                        <label htmlFor="score">Escolha a categoria do fornecedor</label>
                                        <select onChange={updateCategories}>
                                            <option value={"0"}  >SELECIONE UMA CATEGORIA</option>
                                            {
                                                categories.map((cat:any) => {
                                                    return (
                                                        <option value={cat.id}> {cat.name}</option>
                                                    )})
                                            }
                                        </select>
                                    </div>
                                </form >
                                </div>
                                <Link  to={`/findByCategory/${currentCategory}`}>
                                    <div className="dsmovie-form-btn-container mt-5">
                                        <button onClick={sendForm} className="btn btn-primary dsmovie-btn mt-5">Pesquisar</button>
                                    </div>
                                </Link>
                                <Link to="/category">
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

export default CategorySearch;