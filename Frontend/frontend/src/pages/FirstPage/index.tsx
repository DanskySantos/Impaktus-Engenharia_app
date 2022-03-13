import Pagination from "../../components/Pagination";
import Department from "../../components/DepartmentCard";
import {useState} from "react";

function FirstPage() {

    const [loading, setLoading] = useState(true);

    return (
        <>
            {/*{ loading?*/}
            {/*    ('Loading...')*/}
            {/*    :*/}
            {/*    (*/}
                    <>
            <Pagination />

            <div className='container'>
                <div className= "row">
                    <div className= "col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Department/>
                    </div>

                </div>
            </div>
                    </>
            {/*    )*/}
            {/*}*/}
        </>

    );
}

export default FirstPage;