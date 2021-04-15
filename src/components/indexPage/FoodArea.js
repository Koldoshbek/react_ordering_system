import axios from 'axios';
import '../../App.css';
import React, {useEffect, useState} from 'react';



function FoodArea() {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        axios
            .get("https://online-restoran.herokuapp.com/api/foods")
            .then(res=>{setMenuData(res.data)})
            .catch(err=>{
                console.log(err)
            })
    }, [])

    console.log(menuData)

  return (
    <section className="food-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="section-top">
                        <h3><span className="style-change">we serve</span> <br/>delicious food</h3>
                        <p className="pt-3">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {menuData.map(item => (
                    <div className="col-md-4 col-sm-6">
                        <div className="single-food">
                            <div className="food-img">
                                
                            </div>
                            <div className="food-content">
                                <div className="d-flex justify-content-between">
                                    <h5>{item.name}</h5>
                                    <span className="style-change">{item.price}</span>
                                </div>
                                <p className="pt-3">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default FoodArea;
