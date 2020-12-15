import React, { useState } from 'react'
import './AboutCards.scss'
import ReactCardFlip from 'react-card-flip';
import * as Bs from 'react-icons/bs'
import * as Ai from 'react-icons/ai'
import Linkedin from '../../../../assets/img/icon-linkedin.svg'
import Twitter from '../../../../assets/img/icon-twitter.svg'
import about2 from '../../../../assets/img/bg-pattern-about-2-contact-1.svg'
import about3 from '../../../../assets/img/bg-pattern-home-4-about-3.svg'
import AboutCardsData from './AboutCardsData';

function AboutCards() {
    const [isFlipped, setIsFlipped] = useState(false);

    const onHandleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }
    
    return (
        <div className="cards">
            <div className="cards_image">
                <img className="cards_image--1" src={about2} alt="img-1" />
                <img className="cards_image--2" src={about3} alt="img-2" />
            </div>
            <div className="cards_container">
                <div className="cards_title">
                    <h2>Meet the directors</h2>
                </div>

                <div className="cards_boxes">
                    {AboutCardsData.map((item, index) => (
                        <div className="cards_box" key={index}>
                            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                                <div className="cards_box--front">
                                    <img src={item.img} alt="nikita"/>
                                    <h3>{item.name}</h3>
                                    <h4>{item.job}</h4>
                                    <Bs.BsFillPlusCircleFill onClick={onHandleClick} />
                                </div>
    
                                <div className="cards_box--back">
                                    <h3>{item.name}</h3>
                                    <p>
                                    &ldquo;{item.text}&rdquo;
                                    </p>
                                    <div className="cards_links">
                                        <a href="https://www.twitter.com">
                                            <img src={Twitter} alt="twitter"/>
                                        </a>
                                        <a href="https://www.linkedin.com">
                                            <img src={Linkedin} alt="linkedin"/>
                                        </a>
                                    </div>
                                    <Ai.AiFillCloseCircle onClick={onHandleClick}/>
                                </div>
                            </ReactCardFlip>
                        </div>
                    ))}

                    {/* <div className="cards_box">
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className="cards_box--front">
                                <img src={nikita} alt="nikita"/>
                                <h3>Nikita Marks</h3>
                                <h4>Founder & CEO</h4>
                                <Bs.BsFillPlusCircleFill onClick={onHandleClick} />
                            </div>

                            <div className="cards_box--back">
                                <h3>Nikita Marks</h3>
                                <p>
                                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga quas doloribus perferendis!&rdquo;
                                </p>
                                <div className="cards_links">
                                    <a href="https://www.twitter.com">
                                        <img src={Twitter} alt="twitter"/>
                                    </a>
                                    <a href="https://www.linkedin.com">
                                        <img src={Linkedin} alt="linkedin"/>
                                    </a>
                                </div>
                                <Ai.AiFillCloseCircle onClick={onHandleClick}/>
                            </div>
                        </ReactCardFlip>
                    </div>

                    <div className="cards_box">
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className="cards_box--front">
                                <img src={nikita} alt="nikita"/>
                                <h3>Nikita Marks</h3>
                                <h4>Founder & CEO</h4>
                                <Bs.BsFillPlusCircleFill onClick={onHandleClick} />
                            </div>

                            <div className="cards_box--back">
                                <h3>Nikita Marks</h3>
                                <p>
                                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga quas doloribus perferendis!&rdquo;
                                </p>
                                <div className="cards_links">
                                    <a href="https://www.twitter.com">
                                        <img src={Twitter} alt="twitter"/>
                                    </a>
                                    <a href="https://www.linkedin.com">
                                        <img src={Linkedin} alt="linkedin"/>
                                    </a>
                                </div>
                                <Ai.AiFillCloseCircle onClick={onHandleClick}/>
                            </div>
                        </ReactCardFlip>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutCards
