import React from "react";
import "./style.css";

export function Container(props) {
    return <main className={props.containerclass}>
                {props.children}
           </main>
  }

  export function Heading() {
    return <section className="row about-me p-2"> 
              <div className="col-md-12">
                  <h2>Portfolio</h2>
                  <p className="description text-white">Click on each image to see the deployed application or the gitHub icon to view each project's github repository.</p>
              </div>
            </section>
  }
  
  // This Row component lets us use a bootstrap row without having to think about class names
  export function Row({ children }) {
    return <div className="row bg-white">{children}</div>;
  }
  
  // This Col component lets us size bootstrap columns with less syntax
  // e.g. <Col size="md-12"> instead of <div className="col-md-12">
  export function Col({ children }) {
    return (
      <div className="col-md-4 p-3">
        {children}
      </div>
    );
  }
  
  