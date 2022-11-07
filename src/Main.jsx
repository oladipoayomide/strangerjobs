import { Button } from "react-bootstrap";
import { Twitter, Telegram } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import handsomeImg from "./img/handsomeImg.png";
import bioImg from "./img/bioImg.png"
import Talents from "./Talents";
import Jumbatron from "./Jumbatron";
import HowTo from "./HowTo";
import Experience from "./Experience";
import { useState, useEffect } from "react";
import myTalents from "./data/myTalents";
import experiences from "./data/experience";
import FormPage from "./FormPage";
import cuteAsian from "./img/cuteAsian.png"
import WaitingPage from "./WaitingPage";
import Footer from "./Footer";


const Main = () => {

    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [isPending, setIsPending] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '', projectName: '', moderatorWork: false, shillersWork: false, graphicsWork: false, developerWork: false, message: ''
    })

    const scrollIntoFunction = (id) => {
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  
     
      }

    const handleChange = (event) => {
        setSubmitted(false)
        const { name, value, type, checked, } = event.target
        setFormData(prevState => {
            return {
                ...prevState, [name]: `${type !== 'checkbox' ? value : checked}`
            }
        })
       
      
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        fetch("https://formsubmit.co/ajax/strangersjobs@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => console.log(data))

            .then(() => {
                setSubmitted(true)
                setIsPending(false)
                setFormData({
                    fullName: '', projectName: '', moderatorWork: false, shillersWork: false, graphicsWork: false, developerWork: false, message: ''
                })

            })

            .catch(error => {
                console.log(error)
                setIsPending(false)
            });
    }


    let presentDate
    useEffect(() => {
        presentDate = new Date();
        setDay(presentDate.getDate())
        setMonth(presentDate.toLocaleString('default', { month: 'long' }))
    }, [presentDate])



    return (
        <div>
            <Jumbatron
                Button={Button}
                handsomeImg={handsomeImg}
                scrollIntoFunction={scrollIntoFunction}
            />
            <Talents
                myTalents={myTalents}
                FontAwesomeIcon={FontAwesomeIcon}
                Button={Button}
                scrollIntoFunction={scrollIntoFunction}
            />
            <HowTo
                bioImg={bioImg}
                
            />
            <Experience
                experiences={experiences}
                FontAwesomeIcon={FontAwesomeIcon}
            />
            <FormPage
                day={day}
                month={month}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isPending={isPending}
                submitted={submitted}
                Twitter={Twitter}
                Telegram={Telegram}
            />

            <WaitingPage cuteAsian={cuteAsian}
                Button={Button}
                scrollIntoFunction={scrollIntoFunction}
            />

           <Footer
            Twitter={Twitter}
            Telegram={Telegram}
           />
        </div>
    );
}

export default Main;