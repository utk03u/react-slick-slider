import React from 'react'
import './styles.css'
const Slider = () => 
    (
            <div className="carousel-container">
            <h2>thumbnail indicators</h2>
            <ul class="carousel my-carousel carousel--thumb">
                <input className="carousel__activator" type="radio" id="K" name="thumb" checked="checked"/>
                <input className="carousel__activator" type="radio" id="L" name="thumb"/>
                <input className="carousel__activator" type="radio" id="M" name="thumb"/>
                <input className="carousel__activator" type="radio" id="N" name="thumb"/>
                <input className="carousel__activator" type="radio" id="O" name="thumb"/>
                <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="O"></label>
                <label className="carousel__control carousel__control--forward" for="L"></label>
                </div>
                <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="K"></label>
                <label className="carousel__control carousel__control--forward" for="M"></label>
                </div>
                <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="L"></label>
                <label className="carousel__control carousel__control--forward" for="N"></label>
                </div>
                <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="M"></label>
                <label className="carousel__control carousel__control--forward" for="O"></label>
                </div>
                <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="N"></label>
                <label className="carousel__control carousel__control--forward" for="K"></label>
                </div>
                <li className="carousel__slide">
                <h1>K</h1>
                </li>
                <li className="carousel__slide">
                <h1>L</h1>
                </li>
                <li className="carousel__slide">
                <h1>M</h1>
                </li>
                <li className="carousel__slide">
                <h1>N</h1>
                </li>
                <li className="carousel__slide">
                <h1>O</h1>
                </li>
                <div className="carousel__indicators">
                <label className="carousel__indicator" for="K"></label>
                <label className="carousel__indicator" for="L"></label>
                <label className="carousel__indicator" for="M"></label>
                <label className="carousel__indicator" for="N"></label>
                <label className="carousel__indicator" for="O"></label>
                </div>
            </ul>
            </div>);

export default Slider;