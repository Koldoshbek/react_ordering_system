import axios from 'axios';
import '../../App.css';

const [menuData, setMenuData] = useState()

useEffect(() => {
    axios.get('https://online-restoran.herokuapp.com/api/foods')
        .then((result) => {
            setMenuData(result.data)
        })
})

function FoodArea() {
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
                <div className="col-md-4 col-sm-6">
                    <div className="single-food">
                        <div className="food-img">
                            <img src="assets/images/food1.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="food-content">
                            <div className="d-flex justify-content-between">
                                <h5>Mexican Eggrolls</h5>
                                <span className="style-change">$14.50</span>
                            </div>
                            <p className="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FoodArea;
