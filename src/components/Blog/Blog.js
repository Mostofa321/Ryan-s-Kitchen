import React from 'react';

const Blog = () => {
    return (
        <div className="accordion container pt-5 " id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Difference between SQL and NoSQL</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        SQL is the programming language used to interface with relational databases. (Relational databases model data as
                        records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and
                        generally do not use SQL.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>What is JWT, and how does it work?</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely
                        transmitting information between parties as a JSON object. This information can be verified and trusted because
                        it is digitally signed.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>What is the difference between javascript and NodeJS?</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.
                        Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFouth" aria-expanded="false" aria-controls="collapseThree">
                        <strong>How does NodeJS handle multiple requests at the same time?</strong>
                    </button>
                </h2>
                <div id="collapseFouth" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue.
                        NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop
                        that receives requests and processes them
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;