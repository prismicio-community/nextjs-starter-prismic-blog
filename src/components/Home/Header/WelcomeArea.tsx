import React from "react"
import * as prismicH from "@prismicio/helpers"

import { HomepageDocumentDataRotatingstringsItem } from "../../../../prismicio-types"
import TypedHeader from "./TypedHeader"

const WelcomeArea: React.FC<{
  rotatingStrings: HomepageDocumentDataRotatingstringsItem[]
}> = ({ rotatingStrings }) => (
  <div className="welcome-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-align-right">
          <h2>צפריר ליכטנשטיין</h2>
        </div>
        <div className="col-md-12 text-align-right">
          <TypedHeader
            strings={rotatingStrings.map(({ text }) => text ?? "")}
          />
        </div>
      </div>
      <div className="row text-right">
        <div className="col-md-12">
          <div className="welcome-scroll">
            <div className="arrow bounce">
              <a href="#about" className="section-link" data-target="about">
                <i className="fa fa-long-arrow-alt-down fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default WelcomeArea
