

const FormPage = ({ month, day, Twitter, Telegram, handleChange, handleSubmit, formData, isPending, submitted }) => {
    return (
        <div id="formPage" className="form-page container-fluid my-0 my-md-5">
            <div className="row  mx-auto py-5 container" style={{ margin: '0', padding: "0"}}>
                <div className="col-lg-6 left">
                    <div className="date d-flex align-items-center" >
                        <div className="month-day d-flex flex-column me-3" style={{
                            backgroundColor: 'white',
                            color: '#1D242B',


                        }}>
                            <p className="px-2 py-1" style={{ margin: 0, padding: 0, background: '#aa5e5e', color: 'white', }}>{month}</p>
                            <h1 className="px-2 px-2 text-center fw-bold " style={{ margin: 0, padding: 0 }}>{`${day < 10 ? '0' + day : day}`}</h1>

                        </div>
                    <h2 className="fw-bold">Fill form and Hire us</h2>
                    </div>
                    <p className="py-2 my-5 what-we-do" style={{ minWidth: "300px", textAlign: 'justify' }}>We are always open to discuss your project, help improve your project's marketing and provide the best services as possible. </p>
                    <div className="email-us d-none d-md-block">
                        <p className="mb-3"  >Email us at  </p>
                        <p className="mb-3 fw-semibold" >strangerjobs@gmail.com</p>
                        <p>Follow our socials</p>
                        <div className="d-flex mb-3">
                            <a href="http://twitter.com/strangerjobs" target="_blank" rel="noreopener noreferrer"><Twitter className="mySocial me-2" /></a>
                            <a href="http://t.me/strangerjobs" target="_blank" rel="noreopener noreferrer">
                                <Telegram className="mySocial" />
                            </a>
                        </div>
                    </div>


                </div>
                <div className="col-lg-6">
                    <form onSubmit={(e) => {
                        handleSubmit(e)
                    }}>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="name" value={formData.fullName} required name="fullName" style={{ width: '100%' }} onChange={handleChange} placeholder="Your Name *" /> <br />
                        <input type="name" value={formData.projectName} required name="projectName" onChange={(e) => { handleChange(e) }} placeholder="Project Name *" style={{ width: '100%' }} />
                        <div className="checkboxes ms-2 mx-autos">
                            <h4 className="fw-bold text-left mb-3">Which talent do you want to hire?</h4>
                            <div className=" ms-4 row all-talents mb-4 ">
                                <div className=" me-3 col d-flex  flex-column">
                                    <label className="mb-2" > <span className={`${formData.moderatorWork === 'true'? 'd-block': 'd-none'}`}></span> <input type="checkbox" checked={formData.moderatorWork === 'true'} onChange={handleChange} name="moderatorWork" /> Community Mods</label>
                                    <label ><span className={`${formData.shillersWork === 'true'? 'd-block': 'd-none'}`}></span><input type="checkbox" checked={formData.shillersWork === 'true'} onChange={handleChange} name="shillersWork" /> Social media shillers</label>
                                </div>
                                <div className="col d-flex flex-column">
                                    <label className="mb-2" ><span className={`${formData.graphicsWork === 'true'? 'd-block': 'd-none'}`}></span><input checked={formData.graphicsWork === 'true'} type="checkbox" onChange={handleChange} name="graphicsWork" /> Graphics designer</label>
                                    <label ><span className={`${formData.developerWork === 'true'? 'd-block': 'd-none'}`}></span><input type="checkbox" checked={formData.developerWork === 'true'} onChange={handleChange} name="developerWork" /> Website Developer</label>
                                </div>
                            </div>
                        </div>


                        <textarea name="message" rows="8" value={formData.message} placeholder="Write your message ..." style={{ width: '100%' }} onChange={handleChange} />


                        <button className="float-end btn btn-primary" >{`${!isPending ? 'Hire a Talent' : 'Submitting...'}`}</button>
                        {submitted && <h6 className="fst-italic">Your Response has been sent, Reach us easily on <a target="_blank" rel="noreopener noreferrer" href="http://t.me/strangerjobs">Telegram</a> too.</h6>}

                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormPage;