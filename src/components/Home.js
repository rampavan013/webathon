import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import './Home.css'
function Home() {
  return (
    <div className='app1'>
        <Carousel fade className=''>
        <Carousel.Item interval={1000} >
            <img
            className="d-block w-100 "
            src="https://www.grandweddings.co.in/wp-content/uploads/2020/01/Top-Wedding-Event-Management-Companies-in-Hyderabad.jpg" height={650}
            alt="First slide"
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img className="d-block w-100 "
            src="https://dgmc.org.in/wp-content/uploads/2021/04/pexels-wendy-wei-1190297.jpg" height={650}
            alt="Second slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://obsessionoutlet.com/wp-content/uploads/Creative-Event-Planning-Ideas-to-Consider-For-Your-Next-Event.jpg" height={650}
            alt="Third slide"
            />

            <Carousel.Caption>
            
            
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <h1 className='text-center mt-5 w1'>Book a Free Consultation!</h1>
        <div className='fixed-bottom mb-3'>
        <NavLink to='/book' className='ms-3'><Button className='btn btn-success rounded-3 opacity-100'>
            Book Here</Button></NavLink>
        </div>
        <div className='m-auto mt-5  container'>
        <div className="row row-cols-md-2 row-cols-lg-3 w-75 m-auto mt-5 text-center">
        <div className="col mt-2 h-50 w1 ">
            <div className="card shadow ">
                <div className="card-header rounded p-0">
                    <img src=" https://tse4.mm.bing.net/th?id=OIP.kDVmWiLL5T99WvjRu12M1gHaDI&pid=Api&P=0"
                    alt="image not found" className="w-100 rounded" height={175}/>
                </div>
                <div className="card-body">
                    <div className="fs-3"><h2>
                        Wedding</h2></div>
                     <p>
                        Our team of experienced event planners will handle every detail, from venue selection to decor and entertainment, to ensure a enjoyable wedding.
                     </p>

                </div>
            </div>
        </div>
        <div className="col mt-2 h-50 w1">
            <div className="card shadow ">
                <div className="card-header rounded p-0">
                    <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                    alt="image not found" className="w-100 rounded"  height={175}/>
                </div>
                <div className="card-body">
                    <div className="fs-3"><h2>
                        Meeting</h2></div>
                     <p>
                     From venue selection to audiovisual equipment and catering, we'll take care of every detail to create a seamless and engaging meeting experience.
                     </p>
                     
                </div>
            </div>
            
        </div>
        <div className="col mt-2 h-50 w1">
            <div className="card shadow">
                <div className="card-header rounded p-0">
                    <img src="https://i.etsystatic.com/18016477/r/il/109524/2182250841/il_1140xN.2182250841_4isj.jpg" 
                    alt="image not found" className="w-100 rounded" height={175}/>
                </div>
                <div className="card-body">
                    <div className="fs-3"><h2>
                        Birthday</h2></div>
                     <p>
                     From kids' parties to milestone birthdays, we'll take care of everything from invitations to entertainment, so you can enjoy your celebration to the fullest.
                     </p>
                     
                </div>
            </div>
            
        </div>
        <div className="col mt-2 h-50 w1">
            <div className="card shadow ">
                <div className="card-header rounded p-0">
                    <img src="https://buzzharmony.com/wp-content/uploads/2016/02/festivalfeat.jpg" 
                    alt="image not found" className="w-100 rounded"  height={175}/>
                </div>
                <div className="card-body">
                    <div className="fs-3"><h2>
                        Concerts</h2></div>
                     <p>
                     With a team of experienced professionals and access <br/> to the latest technology and equipment.
                     </p>
                </div>
            </div>
            
        </div>
        <div className="col mt-2 h-50 w1">
            <div className="card shadow ">
                <div className="card-header p-0 rounded">
                    <img src="https://www.25cineframes.com/images/gallery/2015/07/cinemaa-awards-function-event-2015-hd-photos/04.jpg" 
                    alt="image not found" className="w-100 rounded" height={175}/>
                </div>
                <div className="card-body">
                    <div className="fs-3"><h2>
                        Cine Awards
                    </h2>
                    </div>
                     <p>
                     Lights, camera, action! Our cine awards event management services will help you create a glamorous guests.
                     </p>
                     
                </div>
            </div>
            
        </div>
        <div className="col mt-2 h-50 w1">
            <div className="card shadow ">
                <div className="card-header rounded p-0">
                    <img src="https://c4.wallpaperflare.com/wallpaper/160/159/676/model-the-show-kendall-jenner-kendall-jenner-wallpaper-preview.jpg" 
                    alt="image not found" className="w-100 rounded"  height={175}/>
                </div>
                <div className="card-body">
                    <div className="fs-3"><h2>
                        Fashion Shows</h2></div>
                     <p>
                     From runway design to lighting and music, we'll create a stunning showcase that highlights your brand's unique.
                     </p>
                     
                </div>
            </div>
            
        </div>

        </div>
        </div>
        
        <Footer className="fixed-bottom"/>
        </div>
  );
}

export default Home;

