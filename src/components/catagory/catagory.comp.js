import React from 'react';

const Catagory = (props) => {
    return (<>
        <div className="cat-items" onClick={()=>props.findByIdProduct(props.cata._id)}>
            <div className="cat-cards">
                <div className="cat-img-box">
                    <img src={`http://localhost:5000/public/${props.cata.image}`} alt="" />
                </div>
                <div className="cat-des">
                    <h5>{props.cata.name}</h5>
                </div>
            </div>
        </div>
    </>)
}
export default Catagory;