
import { useState } from "react"
import { useEffect } from "react";
import { TextAreaField } from "../common"
import { useNavigate } from "react-router-dom";
import { Channel } from "./channel";
import { getChannels } from "../../api";
import { Movie } from "../../models";
import { ChannelsList } from "./";
import { getUserInfo } from "../../api";

export const Dashboard = () => {

  const [ user, setUser ] = useState(undefined);
  const [channels, setChannels] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        getChannels().then(x => setChannels(x));
        if (sessionStorage.token) {
            getUserInfo().then(x => setUser(x));
        } else {
            navigate("/restricted-content");
        }
    }, [])


    if (!user) {
        return <>
            Loading...
        </>
    }
  return (

    <>
      <div className="overlay">
        <div className="p-5 text-center">
          <header>
            <h1>Welcome Back</h1>
          </header>
        </div>
      </div>



        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride='carousel' data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img src="https://www.videogameschronicle.com/files/2020/11/Spider-Man-Remastered-h-1920x1080.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img src="https://filmthreat.com/wp-content/uploads/2019/05/FEAT-Oceans11-00-1200x675.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img src="https://www.hollywoodreporter.com/wp-content/uploads/2022/03/MCDGODF_EC002.jpg?w=2000&h=1126&crop=1" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}



              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      <ChannelsList channels = { channels }/>

       



 
      </>

      )
}
