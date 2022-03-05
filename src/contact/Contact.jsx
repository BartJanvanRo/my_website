import { useState, useEffect } from 'react';

import { db } from '../firebase'
import { collection, doc, getDocs } from 'firebase/firestore'



function Contact() {
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
                    <div>
                        <h2>title: {icontent.title}</h2>
                        <h2>subTitle: {icontent.subTitle}</h2>
                        <p>content: {icontent.text}</p>
                        <img src={icontent.image} alt="" />


                    </div>
                );
            })}
        </div>
    )
}

export default Contact