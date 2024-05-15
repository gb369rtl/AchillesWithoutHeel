import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import { SlGameController } from "react-icons/sl";
// import { GiConsoleController } from "react-icons/gi";  //<GiConsoleController icon={SlGameController} color="FEC53A"/>
import { FaStar } from "react-icons/fa";  //<FaStar icon={FaStar} size={50} color="FEC53A"/>
import { FaStarHalfAlt } from "react-icons/fa";  //<FaStarHalfAlt icon={FaStarHalfAlt} size={50} color="FEC53A"/>
import { FaGrinSquintTears } from "react-icons/fa";  //<FaGrinSquintTears icon={FaGrinSquintTears} size={50} color="FEC53A"/>
import { FaGrinBeamSweat } from "react-icons/fa";   //<FaGrinBeamSweat icon={FaGrinBeamSweat} size={50} color="FEC53A"/>
const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="homeBody">
        <iframe hidden src="pub.mp3" allow="autoplay" ></iframe>
        <div className="game">
            <div className="content-wrapper">
                <div className="content-desc">
                    <h1>THE GAME ZONE</h1>
                    <p>Compete with <span>Rakuto</span> in this immense challenge and be the 
                        winner of all TIme.</p>
                    <p>This is a gaming project based on web development which 
                        includes mind games like sudoku , wordle , tic-tac-toe and one can
                        easily play these games with user friendly environment, games are made interactive. 
                        These mind games addresses area of game based learning, 
                        it serves the educational purpose of enhancing reasoning skills which are actually key abilities, 
                        transversal to any kind of learning. These types of mind games is effective in developing problem
                        solving skills. Gaming is considered as one of the best ways to impart skills while playing.</p>

                    <button id="btn2">Challenge Rakuto Now</button>
                </div>

                <div className="rakuto"></div>
            </div>
        </div>

        <div className="logo-section">
        <SlGameController icon={SlGameController} size={50} color="FEC53A"/>
            <h1>The Game Zone</h1>
        </div>
        
        <section className="section-1">
            <div className="section-1-wrapper">  
                <h1>ARCADE GAMES</h1>
                <br/>
                <div className="section-1-img">
                    <a href="#"><div className="img img-1"></div></a>
                    <a href="#"><div className="img img-2"></div></a>
                    <a href="#"><div className="img img-3"></div></a>
                    <a href="#"><div className="img img-4"></div></a>
                    <a href="#"><div className="img img-5"></div></a>
                    <a href="#"><div className="img img-6"></div></a>
                    <a href="#"><div className="img img-2"></div></a>
                    <a href="#"><div className="img img-3"></div></a>
                </div>
            </div>
            
            <div className="game-categories">
                <h1>GAME CATEGORIES</h1>
                <div className="game-wrapper">
                    <a href="#"><div className="gw gw-1"></div></a>
                    <a href="#"><div className="gw gw-2"></div></a>
                    <a href="#"><div className="gw gw-3"></div></a>
                    <a href="#"><div className="gw gw-4"></div></a>
                    <a href="#"><div className="gw gw-5"></div></a>
                </div>
        
                <div className="game-wrapper left">
                    <a href="#"><div className="gw gw-6"></div></a>
                    <a href="#"><div className="gw gw-7"></div></a>
                    <a href="#"><div className="gw gw-8"></div></a>
                    <a href="#"><div className="gw gw-9"></div></a>
                    <a href="#"><div className="gw gw-10"></div></a>
                </div>
            </div>
        </section>
        <section className="section-2">
            <h1>The Grande Match</h1>
            <div className="players">
                <div className="p-image p-image-3"></div>
                <span>Geetam</span>
                <div className="stars">
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStarHalfAlt icon={FaStarHalfAlt} size={22} color="FEC53A"/>
                </div>

            </div>
            <span className="vs vs1">VS</span>
            <div className="players">
                <div className="p-image p-image-2"></div>
                <span>Kunal</span>
                <div className="stars">
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStarHalfAlt icon={FaStarHalfAlt} size={22} color="FEC53A"/>
                </div>
            </div>
               <span className="vs vs2">VS</span> 
            <div className="players">
                <div className="p-image p-image-1"></div>
                <span>Kashish</span>
                <div className="stars">
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStar icon={FaStar} size={22} color="FEC53A"/>
                    <FaStarHalfAlt icon={FaStarHalfAlt} size={22} color="FEC53A"/>
                </div>
            </div>
              
        </section>
        <div className="section-3">
            <h1>What People say About us</h1>
            <div className="section-3-wrapper">
                <div className="feedback"></div>
                <div className="feedback-desc">
                    <p>It develop skills like reasoning, problem solving skills, 
                        critical thinking based on game based learning. 
                        And developing above skills by playing these mind games is an easy and a fun way.
                        Nowadays, mental health has become an important aspect in our life.
                          So developing these mind games can be used for mental health exercise.
                            and it can also help in relief in stress level</p><br/>
                            <FaGrinSquintTears icon={FaGrinSquintTears} size={33} color="FEC53A"/><br/>
                    <h4>OSCAR</h4>
                </div>
                
                <div className="feedback f-img-2"></div>
                <div className="feedback-desc">
                    <p>Has a wide variety of arcade games which are interesting and fun to play.</p>
                    <br/>
                    <FaGrinBeamSweat icon={FaGrinBeamSweat} size={33} color="FEC53A"/><br/>
                    <h4>MARIO</h4>
                </div>
            </div>
        </div>

    






      {/* <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section> */}
    </div>
  );
};

export default Home;
