const Footer = ({ Twitter, Telegram }) => {
    return (
        <div className="footer container-fluid my-0">
            <div className="container py-5">
                <h2 className="fw-semibold mb-4" >Stranger Jobs</h2>
                <div className="d-flex mb-4">
                    <a href="http://twitter.com/strangerjobs" target="_blank" rel="noreopener noreferrer"><Twitter className="mySocial me-2" /></a>
                    <a href="http://t.me/strangerjobs" target="_blank" rel="noreopener noreferrer">
                        <Telegram className="mySocial" />
                    </a>
                </div>
                <p>Copyright @ 2022 Stranger Jobs. <br />  <span className="fst-italic" >All rights reserved</span></p>
                <p className="fs">
                    Developed by <a href="https://twitter.com/talkmadaa" target="_blank" rel="noreopener noreferrer">Micheal</a> <br />
                    Designed by <a target="_blank" href="https://t.me/borutoking ">Covy</a>  </p>
            </div>
        </div>
    );
}

export default Footer;