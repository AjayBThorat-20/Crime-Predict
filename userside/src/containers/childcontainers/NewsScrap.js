import React, { Component } from "react";
// import rp from "request-promise";
import cheerio from "cheerio";
import axios from "axios";
import { Card, Button} from 'react-bootstrap';
import { Loader } from "../../components/Loader";

import {FacebookShareButton, WhatsappShareButton, TwitterShareButton} from 'react-share';
import {FacebookIcon, WhatsappIcon, TwitterIcon} from 'react-share';


import "../../Styles/containers/ChildContainers/newsScrap.css";

export class NewsScrap extends Component {
     constructor(props) {
        super(props);
        this.state = {
            loading: true,
            crimesdata: [],
        }
    }

    refreshList() {
        axios.get("https://cors-anywhere.herokuapp.com/https://deccanchronicle.com/nation/crime" || "http://localhost:3000/")
            .then(html => {
                const crimesdata = [];
                const $ = cheerio.load(html.data);

                $('div.SunChNewListing').each((_i, element) => {
                    let crime = {};;
                    const photo = $(element)
                        .prepend()
                        .find("div.ThumbImg")
                        .find("img")
                        .attr("data-src");
                    crime.photo = photo;

                    const link = $(element)
                        .prepend()
                        .find("div.ThumbImg")
                        .find("a.noPadding")
                        .attr("href");
                    crime.link = "https://www.deccanchronicle.com/"+link;


                    const header = $(element)
                        .prepend()
                        .find("div.col-sm-8")
                        .find("h3.SunChroListH3")
                        .text();
                    crime.header = header;

                    const maincontent = $(element)
                        .prepend()
                        .find("div.col-sm-8")
                        .find("div.OpinionStrapList")
                        .text();
                    crime.maincontent = maincontent;


                    const dates = $(element)
                        .prepend()
                        .find("span.SunChDt2")
                        .text();
                    crime.dates = dates;

                    // Main Console
                    // console.log(photo);
                    // console.log(header);
                    // console.log(maincontent); 
                    // console.log("https://www.deccanchronicle.com/nation/crime"+link);
                    // console.log(dates); 
                    // console.log("-----------------------\n");

                    crimesdata.push({
                        ...crime
                    });
                });
                this.setState({ crimesdata: [...crimesdata], loading: false });
            })
            .catch(function (err) {
                console.log("crawl failed");
            });

    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        // console.log('line 109', this.state);
         const {crimesdata} = this.state;

        return (
            <div>

                {this.state.loading ? 

                <div className="justify-content-center"> <Loader/> </div> : 


                <div className=" justify-content-center">
                {crimesdata.map((crimdata, index) =>
                    (
                       <div className="main-card textAlign" key={index} >
                           <div className="News-Card" >
                                <div className="txt-center-data">
                            <Card  className="news-card-item"  >
                                <Card.Img src={crimdata.photo} data-src={crimdata.photo} className="news-card-img" />
                                <Card.Body className="news-card-body" >
                                    <Card.Title >{crimdata.header}</Card.Title>
                                    <Card.Text >{crimdata.maincontent} </Card.Text>
                                    <Button href={crimdata.link} target="_blank" className="news-card-btn" >Read More </Button>

                                    <div className="float-left ml-3 mr-3">

                                        <Card.Text>Date : {crimdata.dates}</Card.Text>
                                    </div>

                                    <div className="share-btn" styele={{textAlign:"center"}}>
                                        
                                    <FacebookShareButton url={crimdata.link} style={{margin:"5px"}}>
                                                <FacebookIcon logoFillColor="black" round={true} size={36}></FacebookIcon>
                                            </FacebookShareButton>
                                        

                                        
                                            <WhatsappShareButton url={crimdata.link} style={{margin:"5px"}}>
                                                <WhatsappIcon logoFillColor="white" round={true} size={36}></WhatsappIcon>
                                            </WhatsappShareButton>


                                            <TwitterShareButton url={crimdata.link} style={{margin:"5px"}}>
                                                <TwitterIcon logoFillColor="black" round={true} size={36}></TwitterIcon>
                                            </TwitterShareButton>
                                    </div>
                                </Card.Body>
                                
                            </Card>
                            </div>
                            </div>
                        </div>
                    )
                )}
                </div>
             }
                
            </div>
        )
    }
}
