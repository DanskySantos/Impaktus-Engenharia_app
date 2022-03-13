import './styles.css'
import {Link} from "react-router-dom";

function Category() {

    // const categoryPage = {
    //     id: 1,
    //     title: "Selecione o que deseja fazer",
    // };

    return (
        <div className="dsmovie-form-container">
            <div className="dsmovie-card-bottom-container">
                <h3>Selecione a operação</h3>
                <Link to="/category/register">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cadastrar</button>
                </Link>

                <Link to="/category/search">
                    <button className="btn btn-primary dsmovie-btn mt-3">Pesquisar</button>
                </Link>

                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Voltar</button>
                </Link>
            </div >
        </div >    );

}

export default Category;