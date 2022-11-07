const Talents = ({myTalents, FontAwesomeIcon, scrollIntoFunction, Button}) => {
    
    
    return ( 
        <div id="talents" className="talents py-5" style={{
            backgroundColor: '#C7EEFF',
            width: '100%'
            }}>
            <h1 className="text-center px-3 mb-5 fw-semibold">Our talents</h1>

            <div className="talents-body mx-auto">
                {myTalents && myTalents.map(job => (
                    <div className="each-job py-4 py-md-5 px-4" key={job.id}>
                        <div className="main-talents" style={{height: '80%'}}>
                            <div className="icon mb-2 d-flex align-items-center justify-content-center" ><FontAwesomeIcon icon={job.icon} /></div>
                            <div className="text" style={{
                                color: 'white'
                            }}>
                                <h4>{job.jobTitle}</h4>
                                <p className="">{job.notes}</p>
                            </div>
                        </div>
                        <Button onClick={()=>{scrollIntoFunction('#formPage')}} className="button-sec">Hire a Talent</Button>
                    </div>
                ))}
            </div>

        </div>
     );
}
export default Talents;