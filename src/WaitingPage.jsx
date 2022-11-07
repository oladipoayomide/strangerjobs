const WaitingPage = ({cuteAsian, Button, scrollIntoFunction}) => {
    return ( 
        <div className="waiting-page container px-3 my-5 d-none d-md-block">
        <div className="row align-items-center">
            
            <img src={cuteAsian} alt="lady with laptop" className="img-fluid col" />
            <div className="col waiting-col">
                <h4 className="fw-normal mb-3">WHAT ARE YOU WAITING FOR?</h4>
                <h1 className="fw-bold mb-4 text-justify">Find the talent to get your project growing</h1>
                <Button onClick={()=>{scrollIntoFunction('#formPage')}} className="button-sec">Hire a Talent</Button>
            </div>
        </div>
    </div>

     );
}
 
export default WaitingPage;