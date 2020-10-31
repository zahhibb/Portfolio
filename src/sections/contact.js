import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class ContactSection extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <div className="contact-container">
                    <p>For any inquiries please reach out to me on any of the channels below:</p>
                    <div>
                        <div>
                            <Link to={"#"}></Link>
                        </div>
                        <div>
                            <Link to={"#"}></Link>
                        </div>
                        <div>
                            <Link to={"#"}></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactSection;
