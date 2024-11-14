import React, { Component } from "react";
import rp from "request-promise";
import cheerio from "cheerio";
import axios from "axios";
import { Table , Button , Spinner} from 'react-bootstrap';
import { Loader } from "../../components/Loader";


export class ActsScrap extends Component{
    
    // state = { actsdata: []};

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            actsdata: [],
        }
    }


    refreshList() {
        axios.get("https://cors-anywhere.herokuapp.com/https://doj.gov.in/acts-and-rules" || "http://localhost:3000/")
            .then(html => {
                const actsdata = [];
                const $ = cheerio.load(html.data);

                $('table.views-table.cols-3.teble_st > tbody > tr').each((_i, element) => {
                    let acts = {};;
                    // const sr = $(element)
                    //     .prepend()
                    //     .find("td.views-field.views-field-counter")
                    //     .text();
                    // acts.sr = sr;

                    const title = $(element)
                        .prepend()
                        .find("td.views-field.views-field-php")
                        .text()
                        .split("   \n")[0];
                    acts.title = title;

                    const link = $(element)
                    .prepend()
                    .find("td.views-field.views-field-php-2")
                    .find("a")
                    .attr("href");
                acts.link = link;

                    // Main Console
                    // console.log(photo);
                    // console.log(header);
                    // console.log(maincontent); 
                    // console.log("https://www.deccanchronicle.com/nation/acts"+link);
                    // console.log(dates); 
                    // console.log("-----------------------\n");

                    actsdata.push({
                        ...acts
                    });
                });
                this.setState({ actsdata: [...actsdata] , loading: false });
                
            })
            .catch(function (err) {
                console.log("crawl failed");
            });
        // }
        

    }

    componentDidMount() {
        // // use the request-promise library to fetch the HTML from doj.gov.in
        this.refreshList();
        
    }

    render() {

        // const [loading, setLoading] = useState(false);
        console.log('line 109 General ', this.state);
         const {actsdata} = this.state;

        return (
            <div  className="container "  >

             {this.state.loading ? 

            <div className="justify-content-center"> <Loader/> </div> : 

              <div>
                <Table className="mt-4 "  hover size="sm" >
                    <thead>
                        <tr>
                            
                            <th>
                            <div >

                            <h5 style={{textAlign: 'center'}}>Title</h5>

                            </div >
                            </th>
                            <th>

                            <div >
                                <h5 style={{textAlign: 'center'}}>Document</h5>
                            </div >
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody >
                    {actsdata.map((actsdata, index) =>
                    (
                            <tr  key={index} >
                                {/* <td style={{textAlign: 'center'}}>{actsdata.sr}</td> */}
                                <td style={{textAlign: 'center'}}>{actsdata.title}</td>
                                <td style={{textAlign: 'center'}}><Button href={actsdata.link} target="blank">Download</Button></td>
                            </tr>)
                    )}
                    </tbody>
                </Table>
                </div>
              }
             
            </div>

            
        )
    }
}

