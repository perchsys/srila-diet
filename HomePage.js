import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/HomePage.css";
import Dropdown from 'react-bootstrap/Dropdown';
import img from '../img/bg.jpg'

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);

  };
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ['Maharashtra', 'Kerala', 'Punjab', 'Gujarat', 'Delhi'];

  const handleSearch = (event) => {
    const filter = event.target.value.toUpperCase();
    setSearchTerm(filter);
    const filtered = items.filter((item) => item.toUpperCase().includes(filter));
    setFilteredItems(filtered);
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [toggleMenu, setToggleMenu] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };


  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <Link to="/"><img style={{ width: '400%' }} src={img} alt="Logo" /></Link>
        </div>
        <div className='dropdown'>


          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="adminlogin">Admin</Dropdown.Item>
              <Dropdown.Item href="diabeteslogin">Diabetes</Dropdown.Item>
              <Dropdown.Item href="pregnantlogin">Pregnency</Dropdown.Item>
              <Dropdown.Item href="hypertensionlogin">Hypertension</Dropdown.Item>
              <Dropdown.Item href="obesitylogin">Obesity</Dropdown.Item>
              <Dropdown.Item href="pcoslogin">PCOS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></div>


      </nav>

      <>
        <div className='p-5'>
          <Carousel>
            <Carousel.Item>
              <img style={{ maxHeight: "100vh" }}
                className="d-block w-100"
                src="https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 > <a href='#diabetes'>Diabetes</a></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/7055720/pexels-photo-7055720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3> <a href='#pregnancy'>Pregnancy</a></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3> <a href='#hypertension'>Hypertension</a></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6551427/pexels-photo-6551427.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3> <a href='#obesity'>Obesity</a></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6539799/pexels-photo-6539799.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3> <a href='#pcos'>PCOS</a></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </>

      <section id="diabetes">
        <h2><a href='#'>Diabetes</a></h2>
        <img class="image" src="https://media.istockphoto.com/id/491965869/photo/woman-doing-blood-sugar-test.jpg?b=1&s=612x612&w=0&k=20&c=Ch8J23UTKZVt7ugh7EAP5-qjRUeOmwnsPKkV81kD6TA="></img>
        <p className='paragraph'>Diabetes is a condition where the body cannot regulate blood sugar levels properly due to insulin resistance or deficiency. Insulin is a hormone that helps the cells use glucose (sugar) for energy. When the cells become resistant to insulin or when the pancreas cannot produce enough insulin, glucose accumulates in the blood and causes various complications.Diet plays a crucial role in diabetes management. A low-carbohydrate or very low-calorie diet, and a good intake of protein has to be custom-designed for every patient depending on the individual’s prevalent food habits and lifestyle.Advanced reversal solutions will also involve fitness and stress management methods including Yoga</p>
        <p className='paragraph'>
          Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin</p>
      </section>
      <hr />
      <section id="pregnancy">
        <h2><a href='#'>Pregnancy</a></h2>
        <img class="image" src='https://images.pexels.com/photos/7055720/pexels-photo-7055720.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        <p className='paragraph'>Some women may begin noticing the first early signs of pregnancy a week or two after conception, while others will start to feel symptoms closer to four or five weeks after conception. Some women may not feel symptoms until their period is noticeably late, or even farther into pregnancy.</p>
        <p className='paragraph'>Symptoms of early pregnancy include missed periods, nausea and vomiting, breast changes, tiredness and frequent urination. Many of these symptoms can also be caused by other factors such as stress or illness. If you suspect you may be pregnant, see your doctor.  During pregnancy, women need extraordinary focus on their diet patterns since this affects the health of both and mother and child.Srilas provides a window to a wide range of healthy food options and the right frame of mind that young mothers need to make their pregnancy a period of joyful anticipation.</p>
      </section>
      <hr />
      <section id="hypertension">
        <h2><a href='#'>Hypertension</a></h2>
        <img class="image" src='https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        <p className='paragraph'>Hypertension (high blood pressure) is when the pressure in your blood vessels is too high (140/90 mmHg or higher). It is common but can be serious if not treated. People with high blood pressure may not feel symptoms. The only way to know is to get your blood pressure checked</p>
        <p className='paragraph'>High blood pressure is when the force of blood pushing against the artery walls is consistently too high. This damages your arteries over time and can lead to serious complications like heart attack and stroke. Healthcare providers call high blood pressure a “silent killer” because you do not have usually have any symptoms. So, you may not be aware that anything is wrong but the damage is still occurring within the body.To manage hypertension, eating healthy food can be a first good step. By sticking to a well planned diet, one can reduce the chances of unexpected complications from hypertension.By monitoring your food and lifestyle activities, Srilas provides timely guidance and motivation to improve your health parameters.</p>
      </section>
      <hr />
      <section id="obesity">
        <h2><a href='#'>Obesity</a></h2>
        <img class="image" src='https://images.pexels.com/photos/6642944/pexels-photo-6642944.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        <p className='paragraph'>Overview. Overweight and obesity are defined as abnormal or excessive fat accumulation that presents a risk to health. A body mass index (BMI) over 25 is considered overweight, and over 30 is obese.
        </p>
        <p className='paragraph'>Overweight and obesity are abnormal or excessive fat accumulation that presents a risk to health. Many factors contribute to excess weight gain including eating patterns, physical activity levels, sleep routines, and stress. Other factors could be genetics and taking certain medications also play a role.Food, activity and sleep are the 3 major factors which need to be optimized in order to address the issue effectively.At Srilas, obesity management is effected by monitoring diet patterns and fitness activities.</p>
      </section>
      <hr />
      <section id="pcos">
        <h2><a href='#'>PCOS</a></h2>
        <img class="image" src='https://images.pexels.com/photos/6539833/pexels-photo-6539833.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        <p className='paragraph'>Polycystic ovary syndrome (PCOS) is a condition in which the ovaries produce an abnormal amount of androgens, male sex hormones that are usually present in women in small amounts. The name polycystic ovary syndrome describes the numerous small cysts (fluid-filled sacs) that form in the ovaries.</p>
        <p className='paragraph'>PCOS or Poly Cystic Ovary Syndrome is an issue with harmone that happens during the reproductive years. Obesity and high levels of male harmones are important causes of PCOS.Together with diet, exercise and other healthy lifestyle habits such as plenty of sleep and managing stress can work out to control PCOS.At Srilas, PCOS is addressed through counseling and monitoring diet patterns and fitness activities.</p>
      </section>

    </>
  );
}
export default App;  