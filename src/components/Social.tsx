function Social() {
    return <>
        <div className="social" >
            
            <a target="_blank"  rel="me noopener" href="https://wa.me/@(Model.Location.WhatsAppNonDisplay)" className="btn btn-icon btn-sm btn-whatsapp" aria-label="Message Us On WhatsApp"><i className="fa-brands fa-whatsapp fa-lg"></i></a>

            <a target="_blank" rel="me noopener" href="@(Model.Recipe.googleURL)" className="btn btn-icon btn-sm btn-google" aria-label="Follow Us On Google"><i className="fa-brands fa-google fa-lg"></i></a>
       
            <a target="_blank" rel="me noopener" href="@(Model.Recipe.facebookURL)" className="btn btn-icon btn-sm btn-facebook" aria-label="Follow Us On Facebook"><i className="fa-brands fa-square-facebook fa-lg"></i></a>
           
            <a target="_blank" rel="me noopener" href="@(Model.Recipe.twitterURL)" className="btn btn-icon btn-sm btn-twitter" aria-label="Follow Us On Twitter"><i className="fa-brands fa-twitter fa-lg"></i></a>
          
            <a target="_blank" rel="me noopener" href="@(Model.Recipe.linkedinURL)" className="btn btn-icon btn-sm btn-linkedin" aria-label="Follow Us On LinkedIn"><i className="fa-brands fa-linkedin fa-lg"></i></a>
           
            <a target="_blank" rel="me noopener" href="@(Model.Recipe.youtubeURL)" className="btn btn-icon btn-sm btn-youtube" aria-label="Follow Us On YouTube"><i className="fa-brands fa-youtube fa-lg"></i></a>
           
            <a target="_blank" rel="me noopener" href="@(Model.Recipe.instagramURL)" className="btn btn-icon btn-sm btn-instagram" aria-label="Follow Us On Instagram"><i className="fa-brands fa-instagram fa-lg"></i></a>
           
            <a target="_blank" rel="me noopener" href="@(Model.Recipe.tiktokURL)" className="btn btn-icon btn-sm btn-tiktok" aria-label="Follow Us On TikTok"><i className="fa-brands fa-tiktok fa-lg"></i></a>
            
            <a target="_blank" rel="me noopener" href="@(Model.Recipe.snapchatURL)" className="btn btn-icon btn-sm btn-snapchat" aria-label="Follow Us On Snapchat"><i className="fa-brands fa-snapchat fa-lg"></i></a>
            
        </div>

    </>;
}
export default Social;