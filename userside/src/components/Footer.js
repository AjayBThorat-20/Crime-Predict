import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "../Styles/components/footer.css";

export class Footer extends Component {

  render() {
    return (
      <div className="footer-main">
        <div className="footer-center">
          <div className="row mt-5" >
            <div className="container mt-3"  >
              <p className="col-sm "  >
                &copy; {new Date().getFullYear()} Crime Pridect From HOMETOWN  |  All right reserved  |  Terms Of Service  |  Privacy
              </p>

              {/* <div className=" footer-table"  > */}
            <div className="container footer-table" >
                <div className="main-table" >

                  <Table className="mt-4" hover size="md" >
                    <thead>
                      <tr>

                        <th>
                          <div className="d-flex flex-row justify-content-center">
                            <h6 className="ml-2 mt-2 mr-2 ">web scrapping</h6>
                          </div>

                        </th>
                        <th>
                          <div className="d-flex flex-row justify-content-center">

                            <h6 className="ml-2 mt-2 mr-2">dataset</h6>

                          </div >
                        </th>
                        <th>

                          <div className="d-flex flex-row justify-content-center">
                            <h6 className="ml-2 mt-2 mr-2">tools</h6>
                          </div >
                        </th>
                      </tr>
                    </thead>

                    <tbody>



                      <tr>
                        <td className="data-text">
                          <ul>
                            <li>doj.gov.in</li>
                            <li>deccanchronicle.com</li>
                          </ul>
                        </td>
                        <td className="data-text" >
                          <ul>
                            <li>kaggle.com</li>
                            <li>data.gov.in</li>
                          </ul>
                        </td>
                        <td className="data-text">
                          <ul>
                            <li>vs code</li>
                            <li>poastman</li>
                            <li>jupyter notebook</li>
                          </ul>
                        </td>

                      </tr>

                    </tbody>
                  </Table>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}