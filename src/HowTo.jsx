const HowTo = ({bioImg}) => {
   
    return ( 
        <div id="howItWorks" className="how-to container my-5 px-3 ">
                <div className=" how-it-works row d-flex align-items-center justify-content-center">
                    <div className="col">
                        <img src={bioImg} alt="Bio Image" className="img-fluid" width="400px" />
                    </div>
                    <div className="col">
                        <h1 className="mb-md-4 fw-semibold">How to project your gem to Mars?</h1>
                        <ul>
                            <li>Click Hire a Talent</li>
                            <li>Fill out necessary information</li>
                            <li>Wait for email confirmation</li>
                            <li>Complete payment and it's time to work</li>
                        </ul>
                    </div>
                </div>
            </div>
     );
}
 
export default HowTo;