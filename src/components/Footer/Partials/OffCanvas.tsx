function OffCanvas() {
    return <>
        <div className="offcanvas offcanvas-end bg-card" id="offcanvasSearch" aria-labelledby="offcanvasSearchLabel">
            <div className="offcanvas-header bg-primary">
                <h5 className="offcanvas-title h3" id="offcanvasSearchLabel">Search</h5>
                <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>
        <div className="offcanvas offcanvas-end bg-card" id="offcanvasSaved" aria-labelledby="offcanvasSavedLabel">
            <div className="offcanvas-header bg-primary">
                <h5 className="offcanvas-title h3" id="offcanvasSavedLabel">Saved</h5>
                <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                
            </div>
        </div>
    </>;
}
export default OffCanvas;