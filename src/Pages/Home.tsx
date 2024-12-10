import Fixed from '../components/Hero/Fixed';
import Carousel from '../components/Hero/Carousel';
import HomeImg1 from'/src/assets/home-image1.png';
import React from 'react';
import TestimonialsCarousel from '../components/Owl';


function Home() {
    return <>
        <section id="main" className="py-4 py-lg-5">
            <div className="container">
                <div className="row align-items-center g-3">
                    <div className="col-md-6 ">
                        <img src={HomeImg1} className="img-fluid" alt="Home Image" title="Home Image"/>
                    </div>
                    <div className="col-md-5 offset-md-1 ">
                    <h2 className="h1 mb-1">Backbeat Wedding Band</h2>
                        <hr className="sm left border-secondary"></hr>
                        <p>Backbeat provide a fresh, contemporary alternative to traditional wedding entertainment, creating unforgettable memories for you and your guests with their vibrant, high-energy performances. They even offer a subtle acoustic add-on show, perfect for drinks receptions. With a little something for everyone, they’re a surefire way to bring your big event to life.</p>
                        <div className="d-grid gap-2 d-md-block mt-2">
                            <a className="btn btn-secondary" href="@(Model.MakeSearchLink())">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-4 py-lg-5 bg-primary-d">
            <div className="container">
            <h2 className="h1 mb-4">Videos</h2>
                <div className="row">
                    <div className="col-md-6 video-wrap">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube-nocookie.com/embed/Pzc351sIark?rel=0" width="100%" height="250"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6 video-wrap">
                        <div className="ratio ratio-16x9 mt-2 mt-sm-0">
                            <iframe src="https://www.youtube-nocookie.com/embed/qywLgFDvN74?rel=0" width="100%" height="250"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='Accordion' className="py-4 py-lg-5 bg-card text-center border-top border-card d-none d-md-block border-3">
            <div className="container-fluid">
            <h2 className="h1 mb-4">Meet The Band</h2>
                <ul>
                    <li className="active member-1">
                        <div className="section-title">
                            <h4 className="h1">Liam</h4>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum temporibus dicta reprehenderit tempore quisquam consequuntur porro omnis laboriosam praesentium at et sapiente, provident sit! Suscipit recusandae, ab ratione dignissimos.</p>
                        </div>
                    </li>
                    <li className="member-2">
                        <div className="section-title">
                            <h4 className="h1">Pete</h4>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora totam delectus, eius nostrum aspernatur voluptas enim fugit ipsa magni voluptatem, odio sit accusamus vel id, commodi consequuntur possimus repellat necessitatibus!</p>
                        </div>
                    </li>
                    <li className="member-3">
                        <div className="section-title">
                            <h4 className="h1">Tom</h4>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur saepe vel facilis quae nihil ad aspernatur ex delectus. Tenetur nulla voluptates similique quos, quia possimus, magnam esse natus quis ipsa.</p>
                        </div>
                    </li>
                    <li className="member-4">
                        <div className="section-title">
                            <h4 className="h1">Harvey</h4>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, optio illo, delectus deleniti animi accusamus. Laboriosam maiores totam provident aliquam. Unde, incidunt amet officia a obcaecati, ducimus at molestiae nemo.</p>
                        </div>    
                    </li>
                </ul>
            </div>  
        </section>
        <section className="py-4 py-lg-5 bg-card text-center border-top border-card border-3">
            <div className="container">
                <div className="row align-items-center justify-content-center g-3">
                    <div className="col-6 col-md-3 px-2 px-xxl-4">
                        <div className="card-body bg-white p-4" style={{ borderRadius: 30 }}>
                            <img src="src/assets/badges/1.png" className="img-fluid mb-2" alt="Home Image" title="Home Image" width="85"/>
                            <h3 className="h3 text-secondary">Secure Bookings</h3>
                            <p>Peace of mind with professional contracts.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 px-2 px-xxl-4">
                        <div className="card-body bg-white p-4" style={{ borderRadius: 30 }}>
                            <img src="src/assets/badges/2.png" className="img-fluid mb-2" alt="Home Image" title="Home Image" width="85"/>
                            <h3 className="h3 text-secondary">Secure Bookings</h3>
                            <p>Peace of mind with professional contracts.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 px-2 px-xxl-4">
                        <div className="card-body bg-white p-4" style={{ borderRadius: 30 }}>
                            <img src="src/assets/badges/3.png" className="img-fluid mb-2" alt="Home Image" title="Home Image" width="85"/>
                            <h3 className="h3 text-secondary">Secure Bookings</h3>
                            <p>Peace of mind with professional contracts.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 px-2 px-xxl-4">
                        <div className="card-body bg-white p-4" style={{ borderRadius: 30 }}>
                            <img src="src/assets/badges/4.png" className="img-fluid mb-2" alt="Home Image" title="Home Image" width="85"/>
                            <h3 className="h3 text-secondary">Secure Bookings</h3>
                            <p>Peace of mind with professional contracts.</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>

        <section className="py-4 py-lg-5 bg-card text-center border-top border-card border-3">
            <div className="container">
                <div className="row">
                    <h2 className="h1 mb-3">Gallery</h2>
                    <div className="col-5 mb-4 mb-lg-0 px-0 px-md-3">
                        <img
                        src="src/assets/7.jpg"
                        className="w-100 shadow-1-strong img-fluid  mb-0 mb-md-4"
                        alt="Boat on Calm Water"
                        />

                        <img
                        src="src/assets/13.jpg"
                        className="w-100 shadow-1-strong img-fluid   mb-0 mb-md-4"
                        alt="Wintry Mountain Landscape"
                        />

                        <img
                        src="src/assets/12.jpg"
                        className="w-100 shadow-1-strong img-fluid   mb-0 mb-md-4"
                        alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div className="col-3 mb-4 mb-lg-0 px-0 px-md-3">
                            <img
                            src="src/assets/11.jpg"
                            className="w-100 shadow-1-strong img-fluid   mb-0 mb-md-4"
                            alt="Wintry Mountain Landscape"
                            />

                            <img
                            src="src/assets/4.jpg"
                            className="w-100 shadow-1-strong img-fluid   mb-0 mb-md-4"
                            alt="Wintry Mountain Landscape"
                            />  

                            <img
                            src="src/assets/6.jpg"
                            className="w-100 shadow-1-strong img-fluid   mb-0 mb-md-4"
                            alt="Wintry Mountain Landscape"
                            />  
                        
                    </div>

                    <div className="col-4 mb-4 mb-lg-0 px-0 px-md-3">
                            <img
                            src="src/assets/15.jpg"
                            className="w-100 shadow-1-strong img-fluid   mb-0 mb-md-4"
                            alt="Wintry Mountain Landscape"
                            />

                            <img
                            src="src/assets/1.jpg"
                            className="w-100 shadow-1-strong  img-fluid  mb-0 mb-md-4"
                            alt="Wintry Mountain Landscape" 
                            />  

                            <img
                            src="src/assets/10.jpg"
                            className="w-100 shadow-1-strong img-fluid   mb-0 mb-md-4"
                            alt="Wintry Mountain Landscape"
                            />  
                        
                    </div>

               
                </div>
            </div>
        </section>
        <section id="testimonialsScroller" className='testimonials py-5 background img-1 cover-70 text-center single text-white'>
            <div className="container py-lg-5">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="h2 m-0">@(review.Title)</div>
                            <p className="mt-2">"@(review.Comment)"</p>
                            <i className="fa-solid fa-star"></i>
                            <p className="name">@(review.FirstName) @(review.LastInitial)</p>
                        </div>
                        <div className="carousel-item">
                            <div className="h2 m-0">@(review.Title)</div>
                            <p className="mt-2">"@(review.Comment)"</p>
                            <i className="fa-solid fa-star"></i>
                            <p className="name">@(review.FirstName) @(review.LastInitial)</p>
                        </div>
                        <div className="carousel-item">
                            <div className="h2 m-0">@(review.Title)</div>
                            <p className="mt-2">"@(review.Comment)"</p>
                            <i className="fa-solid fa-star"></i>
                            <p className="name">@(review.FirstName) @(review.LastInitial)</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    </>;
}
export default Home;


