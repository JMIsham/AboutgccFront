/**
 * Created by Isham on 4/20/2017.
 */
import React from 'react';
export function getCountry(name) {
    switch (name){
        case "Bahrain":
            return(
                <div className="ui label" data-tooltip="Bahrain" data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="bh flag"></i>
                </div>
            );
        case "Iran":
            return(
                <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="ir flag"></i>
                </div>
            );
        case "Iraq":
            return(
                <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="iq flag"></i>
                </div>
            );
        case "Kuwait":
            return(
                <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="kw flag"></i>
                </div>
            );
        case "Oman":
            return(
                <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="ae flag"></i>
                </div>
            );
        case "Qatar":
            return(
                <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="qa flag"></i>
                </div>
            );
        case "Saudi Arabia":
            return(
                <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="sa flag"></i>
                </div>
            );
        case "United Arab Emirates":
            return(
                <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                    <i className="ae flag"></i>
                </div>
            );
    }
}