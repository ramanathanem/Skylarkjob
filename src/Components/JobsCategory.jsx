import React from 'react';
import It from '../assets/Images/It1.png';
import Bpo from "../assets/Images/bpo1.png"

import sale from "../assets/Images/sale1.png"
import customer1 from "../assets/Images/customer1.png"
import account from "../assets/Images/accounting.png"
import digital from "../assets/Images/digital1.png"
import health from "../assets/Images/medical.png"
import manifacture from "../assets/Images/building.png"
import skin from "../assets/Images/skin1.png"
import hr1 from "../assets/Images/hr2.png"
import operation from "../assets/Images/operation1.png"
import ms2 from "../assets//Images/ms3.png"
function JobsCategory() {
  const Data = [
    { id: 1, name: 'IT', img: It },
    { id: 2, name: 'Bpo', img: Bpo },
    { id: 3, name: 'Sale & Marketing', img: sale },
    { id: 4, name: 'Customer service', img: customer1 },
    { id: 1, name: 'Account', img: account },
    { id: 2, name: 'Digital Marketing', img: digital },
    { id: 3, name: 'Health care', img: health },
    { id: 4, name: 'Manifacturing', img: manifacture },
    { id: 1, name: 'Skin clinic', img: skin },
    { id: 2, name: 'Human Resource', img: hr1 },
    { id: 3, name: 'Operation', img: operation },
    { id: 4, name: 'Miscellaneous', img: ms2 },
  ];
 
  return (
    <div>
      <h1 className='text-center mt-5' style={{ fontFamily: 'Varela Round',fontSize:"24px" ,color:"#505050"}}>
        BROWSE JOBS BY CATEGORY
      </h1>
      <div className='container mt-5 text-center'>
        <div className='row mb-4'>
          {Data.map((data) => (
            <div className='col-md-3' key={data.id}>
              <div className='card mb-3'>
                <div className='card-body'>
                  <h5 className='card-title'>{data.name}</h5>
                  <img src={data.img} alt={data.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobsCategory;
