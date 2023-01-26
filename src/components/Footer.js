import React from 'react';
import './Footer.css';
import { Form, Link, NavLink } from "react-router-dom";
import envelope from '../images/envelope-fill.svg'
import facebook from '../images/facebook.svg'
import youtube from '../images/youtube.svg'

const Footer = () =>{
  return (
            <footer className="foot" >

                <div className="container">
                    <div className="row ">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 " >
                            <div className="parag d-flex flex-row">
                            
                                    <div className="men p-2 "><Link to='' > &copy; 2023 Σ-Maroc </Link> </div>
                                    <div className="men p-2"><Link to=''>Qui Sommes-Nous</Link></div>
                                    <div className="men p-2"><Link to=''>Politique De Confidentialité</Link></div>
                                    <div className="men p-2"><Link to=''>Contactez-Nous</Link></div>

                            </div>
                        </div>

                        <div className="col-lg-3 d-none d-lg-block">
                            
                            <div className="d-flex flex-row-reverse">
                                <div className="p-1"><Link to="https://web.facebook.com/profile.php?id=100065692700783" target="_blank"><img src={facebook} alt="Bootstrap" width="20" height="20" className="mx-3"/></Link></div>
                                <div className="p-1"><Link to="https://www.youtube.com/channel/UCHoSQJWgqx-ua2Xp7oCelWQ" target="_blank"><img src={youtube} alt="Bootstrap" width="20" height="20" className="mx-3"/></Link></div>
                                <div className="p-1"> <Link to="index.html"><img src={envelope} alt="Bootstrap" width="20" height="20" className="mx-3"/></Link></div>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>

  )
}

export default Footer
