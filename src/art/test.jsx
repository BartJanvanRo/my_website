import '/Users/bart-janvanrossum/Desktop/my_website/src/css/main.min.css';
import { useState, useEffect } from 'react';
import arrow from '../img/button/arrowBttnVerti.svg'
import { db } from '../firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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


    const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

    if (index >= 0) {


    } else {
        console.warn(
            `Cant remove product (id: ${action.id}) as its not found `
        )
    };
}