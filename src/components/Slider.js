import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import ban_4 from "../assets/banner/ban-5.jpg";
import ban_2 from "../assets/banner/ban-2.jpg";
import ban_3 from "../assets/banner/ban_3.jpg";
import "../nav.css";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='slide'>
      <Carousel.Item>
        <img src={ban_4} style={{width:"100%" , height:"556px"}}/>
        <Carousel.Caption>
          <h3>SpiderMan No Way Home</h3> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban_2} style={{width:"100%" , height:"556px"}}/>
        <Carousel.Caption>
          <h3>Oppenheimer</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban_3} style={{width:"100%" , height:"556px"}}/>
        <Carousel.Caption>
          <h3>Avatar the way of water</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;