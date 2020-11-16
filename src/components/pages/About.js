import React from 'react'
import { NavLink } from 'react-router-dom';
import { ButtonLink } from "../layout/buttons/ButtonLink.js"
// Services
import { stayUpToDateCards, stats } from "./About.service.js";
// Styles
import './About.css'
// Images
import homePassingBoxes from "../../assets/home-passing-boxes.png"
import whereWeActMap from "../../assets/where-we-act-map.png"
import peopleHoldingTrashIMG from "../../assets/people-holding-trash.png"

import Iframe from 'react-iframe'


/********************************  
Component: Stay Up To Date
TODO: 
- stayUpToDate-tile should be a button. Do I have the links for them?
********************************/

function About() {
    return (
        <div className="about page polygon-page">

            <section id="the-neighborhood">
                <div className="row-container" >
                    <div className="split-wrapper">
                        <div className="split-col y-center">
                            <img className="split-col-img home-passing-boxes-img" src={homePassingBoxes} alt="people passing boxes" />
                        </div>
                        <div className="text-group split-col y-center">
                            <div className="title">We are neighbors in Clinton Hill and Fort Greene coming together to care for one another through the COVID-19 pandemic and beyond.</div>
                            <div className="btn-wrapper">
                                <ButtonLink linkTo="/get-help" text="I need help" />
                                <ButtonLink linkTo="/give-help" text="I can help" />
                            </div>
                            <p className="small-text">Want to help financially? You can <NavLink to="/donate" exact={true}><b><u>donate</u></b></NavLink> to our Mutual Aid Fund—100% of funds raised go towards purchasing essentials for people in the community.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="where-we-act">
                <div className="row-container">
                    <div>
                        <div className="header1">Where we act</div>
                        <p>We live and act in the neighborhoods of Clinton Hill and Fort Greene in Brooklyn. If you’re outside this area, you can find a group closer to you through <b><u>Mutual Aid NYC</u></b>.</p>
                    </div>
                    <img className="split-col-img" src={whereWeActMap} alt="map of where we act" />
                </div>
            </section>

            <section className="since">
                <div className="row-container">

                    <div className="header1">Since March 2020</div>
                    <div className="copy">
                        <p className="standard-text">In just a few short months, we’ve done a lot together—and this is just the start. These numbers were last updated on July 8, 2020.</p>
                        <div className="since-items-wrapper">
                            {stats.map(({ stat, text }) => (
                                <div className="since-item">
                                    <div className="since-item-title">{stat}</div>
                                    <div className="since-item-description">{text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={peopleHoldingTrashIMG} className="people-holding-trash-svg" alt="people holding trash" />

                </div>
            </section>

            <section className="stay-up-to-date">
                <div className="row-container">
                    <div className="header1 title">Stay up to date</div>
                    <div className="cards-wrapper">
                        {stayUpToDateCards.map(({ image, text, alt }, i) => (
                            <div className="card" key={"stayUpToDate-tile-" + i}>
                                <div className="stayUpToDate-icon-image">
                                    <img src={image} alt={alt} />
                                </div>
                                <div className="stayUpToDate-icon-text">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="instagram-updates">
                <div className="row-container">
                    <div className="header1 title">Instagram updates</div>
                    <div className="small-text text">Share photos of you taking action and tag us so that we can share with the community! (Of course, only take and share photos of others with their consent.)</div>
                    <div className="iframe-container">
                        <Iframe url="https://www.powr.io/instagram-feed/u/d93addb1_1586953295?isCookieAllowed=undefined#platform=embed"
                            powrindex="0"
                            frameborder="0"
                            webkitallowfullscreen=""
                            mozallowfullscreen=""
                            allowfullscreen=""
                            width="100%"
                            height="700vh"
                            id="instagram-iframe"
                            display="initial"
                        />
                    </div>
                </div>
            </section>

            {/* <section  id="our-principles">
                <div className="row-container flex-row" >
                    <p className="header1">Our principles</p>
                    {ourPrinciples.map(({ title, description }, i) => (
                        <div className="ourPrinciples-container" key={"our-principles-" + i}>
                            <div className="ourPrinciples-name">{title}</div>
                            <div className="ourPrinciples-description">{description}</div>
                        </div>
                    ))}
                </div>
            </section> */}

        </div>
    )
}

export default About;


