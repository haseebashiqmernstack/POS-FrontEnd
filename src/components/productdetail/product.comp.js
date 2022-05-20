import React from 'react';

const Products = (props) => {
    return (<>
     <div className="cards" onClick={()=>alert('banana')}>
                          <div className="image">
                              <img src={`http://localhost:5000/public/${props.prod.productPictures[0].img}`} alt="" />
                          </div>
                          <div className="des">
                              <div className="des-sub">
                              <h4>{props.prod.name}</h4>
                              </div>
                              
                          </div>
                      </div>
    </>)
}
export default Products;