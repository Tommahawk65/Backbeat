import $ from 'jquery';

function Carousel() {
    return <>
    
    <section id="hero-wrap">
        <div id="hero" className="h-100"> {/* use vh-100 for full height */}
            <div className="item h-100"> {/* use vh-100 for full height */}
                <img alt="Used vehicles for sale at @(Model.DealerName)" title="Visit @(Model.DealerName) for used vehicles in @(Model.Location.Town), @(Model.Location.County)"
                src="src/assets/hero-1-1920.jpg" className=""/>
            </div>
        </div>
        <div className="caption">
            <h2 className="h1 mb-2">Welcome to @(Model.DealerName)</h2>
            <h1 className="h2 fw-normal opacity-75">Quality Used Cars in @(Model.Location.Town), @(Model.Location.County)</h1>
        </div>
    </section>


    
 

  

    


    </>;
}
export default Carousel;


