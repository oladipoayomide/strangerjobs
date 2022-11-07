import Card from "./Card";

const Experience = ({ experiences, FontAwesomeIcon }) => {


    return (
        <div className="experiences container text-center">
            <h1 className="my-4 fw-semibold">The benefit of using <br />
                our platform</h1>
            <div className="row mx-auto">
                {experiences && experiences.map((item) => (
                <div className="col d-flex flex-column align-items-center" key={item.id}>
                    <div className="img-exp my-2 d-flex align-items-center justify-content-center" style={{ width: '139px', height: '139px', borderRadius: '100%', backgroundColor: '#C7EEFF' }}><FontAwesomeIcon icon={item.logo} fontSize="2.5rem" /></div>
                    <p>{item.body}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Experience;