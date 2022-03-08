import { useState, useEffect } from 'react';
import arrow from '../img/button/arrowBttnVerti.svg'

import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Link, useLocation } from "react-router-dom";

function Home() {
    const [content, setContent] = useState([]);
    const contentcollection = collection(db, 'content')

    //useEffect, wanneer de pagina geladen worden
    useEffect(() => {

        const getContent = async () => {
            const data = await getDocs(contentcollection);
            setContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getContent();



    }, [])



    const idCheck = content.map(e => {
        return e.id
    })
    //console.log(document.title)
    //console.log(idCheck)
    //we zoeken in een array dezelfde naam en dan de onderliggende data ophalen, vergelijking id  
    document.title = "homepage"

    return (
        <div className="generalContainerBody">
            {""}
            {content.map((icontent) => {
                if (icontent.id == document.title) {
                    console.log(icontent)
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
                                <Link to="/UI">
                                    UI/<br />
                                    UX <br />
                                    <img src={arrow} alt="arrow" />
                                </Link>
                            </div>

                        </div>
                    );
                }
            })}
        </div >
    )


}

export default Home