

const Jumbatron = ({Button, handsomeImg, scrollIntoFunction}) => {
   
    return ( 
       
        <div className="container">
            <div id="jumbatron" className="jumbatron d-flex row justify-content-between align-items-center">
                <div className="text-left jumbatron-text col-12 col-sm-7 col-md-6  py-5">
                    <h1 className="text-justify fw-bold mb-3">Recruit top talented
                        freelancer for your
                        crypto gem</h1>
                    <p className="mb-3">Connect you to thousands of talented freelancer from any industry. You can have the best people in just few simple steps.</p>
                    <Button onClick={()=>{scrollIntoFunction('#formPage')}} className="button-pry mb-3">Hire a Talent</Button>
                </div>
                <div className="image-right col-12 col-sm-5" >
                    <img src={handsomeImg} className="img-fluid" />
                </div>
                </div>
        </div>
     );
}
 
export default Jumbatron;