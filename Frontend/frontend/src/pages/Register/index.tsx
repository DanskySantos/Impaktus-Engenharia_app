import './styles.css'
import {Link} from "react-router-dom";

function Category() {

    const categoryPage = {
        id: 1,
        title: "Se o novo fornecedor não se encaixar em nem uma categoria, cadastre a categoria e depois o fornecedor!",
    };

    return (
        <div className="dsmovie-form-container">
            <div className="dsmovie-card-bottom-container">
                <h3>{categoryPage.title}</h3>
                <Link to="/category/register/categoryregister">
                    <button className="btn btn-primary dsmovie-btn mt-3">Nova Categoria</button>
                </Link>

                <Link to="/category/register/providerregister">
                    <button className="btn btn-primary dsmovie-btn mt-3">Novo Fornecedor</button>
                </Link>

                <Link to="/category">
                    <button className="btn btn-primary dsmovie-btn mt-3">Voltar</button>
                </Link>
            </div >
        </div >
    );

}

export default Category;