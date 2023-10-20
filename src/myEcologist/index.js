import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";

function Ecologist() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Navigation />
                </div>
                <div className="col-md-6">
                    <Header />
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Ecologist;
