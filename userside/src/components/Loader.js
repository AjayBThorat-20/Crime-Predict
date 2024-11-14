import React, { Component } from 'react';

import "../Styles/components/loders.css"

export class Loader extends Component {

  render() {
    return (
      <div className="main-loader">
      <div className="divLoader">
        <h4>Loading ......</h4>
        <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
          <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
        </svg>
      </div>
      </div>
    )
  }
}