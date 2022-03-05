import portrait from '../img/portrait.png';
import { useState, useEffect } from 'react';
import arrow from '../img/button/arrowBttnVerti.svg'

import { db } from '../firebase'
import { collection, doc, getDocs } from 'firebase/firestore'

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
        console.log(getContent)

    }, [])



    return (


        <div className="generalContainerBody">
            <div className="container">
                <div className="top_title">

                </div>
                <div className="flexContainer">
                    <div className="bottomLeft">
                        <img src={portrait} alt="My Drawing" />
                    </div>
                    <div className="bottomRight">
                        <h2>Bart-Jan?</h2>
                        <br />
                        Ik ben een zoekende ziel die zijn creativiteit op verschillende manieren uitdrukt, die graag  verschillende technieken leert kennen en toepassen. Ondanks het creative werk ik toch structureel en analytisch. Energie krijg  ik van input om me heen, bijv. interviews, projectmatige samenwerking, overleg met opdrachtgevers, collega’s en users. <br /> UI/UX geeft me een kans om creatief te zijn op een toegepaste manier, zowel een functionele toepassing te creëren alsmede een visueel pareltje om naar te kijken.
                        <br /><br />
                        Naast het werken met computers ben ik graag bezig met mijn handen, ik schilderen en teken graag. Voor sociale interactie kan ik me helemaal uitleven op het badmintonveld en achteraf gezellig napraten in de kantine.

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
        </div>
    )
}

export default Home