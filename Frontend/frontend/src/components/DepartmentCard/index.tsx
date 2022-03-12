import {Link} from "react-router-dom";

function Department() {
    const provider = {
        id: 1,
//        image: "https://i.dlpng.com/static/png/6986850_preview.png",
        title: "Fornecedores",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            {/*<img className="dsmovie-movie-card-image" src={provider.image} alt={provider.title} />*/}
            <div className="dsmovie-card-bottom-container">
                <h3>{provider.title}</h3>

                <Link to={`/category`}>
                    <div className="btn btn-primary dsmovie-btn">Acessar</div>
                </Link>
            </div>
        </div>
    );
}

export default Department;