import React, { useState } from 'react';
import Navbar from "../components/NavBar";
import onionimg from '../pages/images.jpg';
import potatoimg from '../images/potato.jpg';
import bendakayimg from '../images/bendakay.jpg';
import dondakayimg from '../images/dondakaya.jpg';
import berakayimg from '../images/berakaya.webp';





function VegetablesPage({ addToCart }) {
  const vegetables = [
    { image:onionimg, name: 'Onion', weights: ['500g', '1kg', '2kg'] },
    { image:potatoimg,name: 'Potato', weights: ['500g', '1kg', '2kg'] },
    { image:bendakayimg,name: 'Bendakay', weights: ['500g', '1kg', '2kg'] },
    { image:dondakayimg,name: 'Dondakay', weights: ['500g', '1kg', '2kg'] },
    { image:berakayimg,name: 'Berakay', weights: ['500g', '1kg', '2kg'] }

  ];

  const [selectedWeight, setSelectedWeight] = useState({});

  const handleWeightChange = (vegName, weight) => {
    setSelectedWeight((prev) => ({ ...prev, [vegName]: weight }));
  };

  const handleAddToCart = (veg) => {
    const weight = selectedWeight[veg.name];
    if (weight) {
      addToCart({ name: veg.name, weight });
    } else {
      alert('Please select a weight');
    }
  };

  return (
    <div>
                  <Navbar />

      <h2>Vegetables</h2>

      {vegetables.map((veg, index) => (
        <div key={index} className="vegetable-item">
          <h4>{veg.name}</h4>
          <div className='veggies'>
          <img src={veg.image} alt={veg.name}/>
          

          {veg.weights.map((weight) => (
            <label key={weight}>
              <input
                type="radio"
                name={veg.name}
                value={weight}
                onChange={() => handleWeightChange(veg.name, weight)}
              />
              {weight}
            </label>
          ))}
        </div>
        <button onClick={() => handleAddToCart(veg)}>Add</button>

        </div>
      ))}
    </div>
  );
}

export default VegetablesPage;