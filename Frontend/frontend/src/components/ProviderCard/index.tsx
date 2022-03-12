import {Link} from "react-router-dom";
import {ProviderForm} from "../../types/provider-form";

type Props = {
    provider: ProviderForm;
}

function ProviderCard( { provider } : Props) {

    return (
        <div>
            {/*<img className="dsmovie-movie-card-image" src={provider.image} alt={provider.title} />*/}
            <div className="dsmovie-card-bottom-container">
                <h3>{provider.name}</h3>
                <Link to={`/category/${provider.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Acessar</div>
                </Link>
            </div>
        </div>
    );

}

export default ProviderCard;