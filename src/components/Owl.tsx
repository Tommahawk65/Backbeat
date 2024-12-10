

const Features = () => {

  const options = {
    items: 1,
    mouseDrag: true,
    nav: true,
    loop: true,
    dots: false,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    touchDrag: true,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 15000,
    smartSpeed: 1000,
    
  }


  return (
    <section id="testimonialsScroller" className='testimonials py-5 bg-secondary text-center single ' {...options}>
      <div className="container py-lg-5">
        
    
        <div className="owl-carousel">
          <div className="item">
              
                
              
             
              <div className="h2 m-0">@(review.Title)</div>
              
              <p className="mt-2">"@(review.Comment)"</p>
              <i className="fa-solid fa-star"></i>
              <p className="name">@(review.FirstName) @(review.LastInitial)</p>
          </div>
          <div className="item">
              
                
              
             
              <div className="h2 m-0">@(review.Title)</div>
              
              <p className="mt-2">"@(review.Comment)"</p>
              <i className="fa-solid fa-star"></i>
              <p className="name">@(review.FirstName) @(review.LastInitial)</p>
          </div>
            
            
        </div>
    </div>
</section>
        
      
  )
}

export default Features


