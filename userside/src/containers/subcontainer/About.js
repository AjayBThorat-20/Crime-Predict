import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { ChildAbout } from '../childcontainers/ChildAbout';
import { ChildVission } from '../childcontainers/ChildVission';
import { ChildAboutImg } from '../childcontainers/ChildAboutImg';
import { ChildVissionImg } from '../childcontainers/ChildVissionImg';




export class About extends Component {

    render() {


        return (
            <div className='container'>
                {/* <div className='jumbotron mt-5'>
            <h1 className='display-4'>About</h1>
        </div> */}
                <div className="container justify-content mt-5">
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <ChildAboutImg />
                            
                            <Carousel.Caption  >
                                <ChildAbout />
                            </Carousel.Caption>
                        
                        </Carousel.Item>


                        <Carousel.Item interval={1500}>
                            <ChildVissionImg/>
                           
                        <Carousel.Caption  >
                            <ChildVission />
                            </Carousel.Caption>
                         
                        </Carousel.Item>


                       
                    </Carousel>
                </div>
            </div>
        )
    }
}
