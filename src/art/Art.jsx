import '/Users/bart-janvanrossum/Desktop/my_website/src/css/main.min.css';
import { useState, useEffect } from 'react';
import arrow from '../img/button/arrowBttnVerti.svg'
import { db } from '../firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


// nog na te vragen, afbeeldingen via show images by firebase.
// sync database met sjabloon = verschillende webpagina's
function Art() {
    const [content, setContent] = useState([]);
    const contentcollection = collection(db, 'content')

    //useEffect, wanneer de pagina geladen worden
    useEffect(() => {

        const getContent = async () => {
            const data = await getDocs(contentcollection);
            setContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getContent();
        console.log(getContent)

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
                                <img src={icontent.image} alt="My Drawing" />
                            </div>
                            <div className="bottomRight">
                                <h2>{icontent.subTitle}</h2>
                                <br />
                                {icontent.text}
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