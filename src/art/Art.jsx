import '/Users/bart-janvanrossum/Desktop/my_website/src/css/main.min.css';
import { useState, useEffect } from 'react';
import arrow from '../img/button/arrowBttnVerti.svg'
import { db } from '../firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom"



// nog na te vragen, afbeeldingen via show images by firebase.
// sync database met sjabloon = verschillende webpagina's
function Art() {

    // const path = Link
    // console.log(path)

    const [content, setContent] = useState([]);
    const contentcollection = collection(db, 'content')

    //useEffect, wanneer de pagina geladen worden
    useEffect(() => {

        const getContent = async () => {
            const data = await getDocs(contentcollection);
            setContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }


        getContent();

        const idCheck = content.map(e => {
            return e.id
        })


        document.title = "Art.jsx"
        console.log(document.title)

    }, [])


    return (
        <div className="generalContainerBody">
            {""}
            {content.map((icontent) => {

                return (
                    <div className="container">
                        <div className="top_title">
                            {icontent.title}

                        </div>
                        <div className="flexContainer">
                            <div className="bottomLeft">
                                <img src={icontent.image1} alt="My Drawing" />
                            </div>
                            <div className="bottomRight">
                                <h3>{icontent.subTitle}</h3>
                                <br />
                                {icontent.text}
                                <br />
                                <img src={icontent.image2} alt="zichtbaar?" />


                            </div>
                            {/*     <div className="rightBttm">

                        UI <br />
                        1/2
                        <img src={arrow} alt="arrow" />
    </div> */}
                        </div>
                        <div className="vertiBttm">
                            UI/<br />
                            UX <br />
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Art