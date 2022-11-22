import React from 'react'

const profile_image = "https://thumbs.dreamstime.com/b/happy-girls-icon-vector-young-woman-icon-illustration-face-people-icon-flat-cartoon-style-person-head-isolated-avatar-74926713.jpg"

function About() {
  return (
    <section id="about" className="d-flex align-items-start">
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">About Me</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim commodi voluptates pariatur sapiente, porro totam ducimus distinctio nesciunt voluptate id dolores inventore omnis, eligendi ex beatae mollitia officiis exercitationem quo.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 pb-1">
                    <div className="card">
                        <img src={profile_image} alt="no image" className='card-img-top'/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body bg-white">
                            <h5 className="text-center text-teal card-title">
                                Personal Details
                            </h5>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non doloremque tenetur velit ipsum.</p>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <strong className="text-secondary">DOB</strong>
                            <span className="text-teal float-end">13 Apr 1998</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Email</strong>
                            <span className="text-teal float-end">ammutsav06gmail.com</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Mobile</strong>
                            <span className="text-teal float-end">9731195298</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">City</strong>
                            <span className="text-teal float-end">Davanagere, Karnataka</span>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <strong className="text-secondary">Qualification</strong>
                            <span className="text-teal float-end">BE</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Father Name</strong>
                            <span className="text-teal float-end">Jagadeesha H.B</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Mother Name</strong>
                            <span className="text-teal float-end">Kanthamma</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Marital Status</strong>
                            <span className="text-teal float-end">Unmarried</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>

     <div className="row mt-4">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-teal">Skills</h3>
        </div>
     </div>
     <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <p>
                                <strong className="text-secondary">HTML</strong>
                                <strong className="text-teal float-end">98%</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-success" style={{width:'98%'}}>98%
                                    </div>
                                </div>
                            </p>
                            <p>
                                <strong className="text-secondary">CSS</strong>
                                <strong className="text-teal float-end">75%</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" style={{width:'75%'}}>75%
                                    </div>
                                </div>
                            </p>
                            <p>
                                <strong className="text-secondary">BOOTSTRAP</strong>
                                <strong className="text-teal float-end">80%</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" style={{width:'80%'}}>80%
                                    </div>
                                </div>
                            </p>
                           
                            
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                        <p>
                                <strong className="text-secondary">JAVASCRIPT</strong>
                                <strong className="text-teal float-end">50%</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-info" style={{width:'50%'}}>50%
                                    </div>
                                </div>
                            </p>
                            <p>
                                <strong className="text-secondary">JQUERY</strong>
                                <strong className="text-teal float-end">50%</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-secondary" style={{width:'50%'}}>50%
                                    </div>
                                </div>
                            </p>
                            <p>
                                <strong className="text-secondary">REACT JS</strong>
                                <strong className="text-teal float-end">45%</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{width:'45%'}}>45%
                                    </div>
                                </div>
                            </p>
                           
                        </li>
                    </ul>
                </div>
            </div>
            </div>
     </div>
</div>


    </section>
  )
}

export default About