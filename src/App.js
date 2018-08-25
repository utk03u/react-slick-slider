import React from 'react';
//import './App.scss'
import './App.css'
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faTaxi, faBicycle } from '@fortawesome/free-solid-svg-icons';
//const baseUrl = "https://svgshare.com/s";


// const CustomDots = (props) => {
//   const { next, prev, slideCount, slidesToScroll, goto } = props;
//   const dotCount = Math.ceil(slideCount / slidesToScroll);
//   const dots = Array.from(Array(dotCount));

//   return (<ul className="custom-dots">
//     <li onClick={prev}><FontAwesomeIcon icon ={faArrowAltCircleLeft} style = {{fontSize: '32px'}}/></li>
//     {dots.map((dot, i) => (
//       <li key={i} onClick={() => goto(i)} />)
//     )}
//     <li onClick={next}><FontAwesomeIcon icon ={faArrowAltCircleRight} style = {{fontSize: '32px'}}/></li>
//   </ul>);
// };



class App extends React.Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.goto = this.goto.bind(this);
  }
  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
  }

  goto(i) {
    this.slider.slickGoTo(i);
  }

  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src="https://svgur.com/i/81v.svg"
                 className="sliding"
                 alt="images" />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      arrows: true,
      pauseOnHover:true,
      fade: true,
    };

    return (
      <div className="slide-wrapper">
        <div className= "card">
         
        <Slider {...settings} ref={node => (this.slider = node)}>
          <div className="slide slide-one">
              <p className="onet">Partner1</p>
              <div className = "brand_back1"></div>
              <FontAwesomeIcon icon = {faPiggyBank} className = "brandIcons"/>
              
              <p className="details">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur.
                Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur"
              </p>
              <p className = "person">AROKO BELL <br/>Chief Tech Officer</p>
          </div>
          <div className="slide slide-two">
          <p className="onet">Partner2</p>
          <div className = "brand_back2"></div>
              <FontAwesomeIcon icon = {faBicycle} className = "brandIcons"/>
          
              <p className="details">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                 Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur.
                Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
                ut varius arcu efficitur"
              </p>
              <p className = "person">STEVE CAT <br/>Chief Tech Officer</p>
          </div>
          <div className="slide slide-three">
          <p className="onet">Partner3</p>
          <div className = "brand_back3"></div>
          <FontAwesomeIcon icon = {faTaxi} className = "brandIcons"/>
          
          <p className="details">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
            ut varius arcu efficitur.
            Nam Nam sed velit urna. Pellentesque porta euismod dolor, 
            ut varius arcu efficitur"
          </p>
          <p className = "person">STEPHEN MARK <br/>Chief Tech Officer</p>
          </div>
        </Slider>

        {/*-----------------------------------------------------------*/}
       </div>
       
      </div>
    );
  }
}




export default App;
