import { useState, useEffect } from 'react';
import arrow from './img/button/arrowBttnVerti.svg'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'


function Template2() {
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
                                <div className="image3x">
                                    <img src={icontent.image1} alt="My Drawing" />
                                </div>
                                <div className="image3x">
                                    <img src={icontent.image2} alt="My Drawing" />

                                </div>
                                <div className="image3x">
                                    <img src={icontent.image3} alt="My Drawing" />

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
                }
            })}
        </div>
    )


}

export default Template2