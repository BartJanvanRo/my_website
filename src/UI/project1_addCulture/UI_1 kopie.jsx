

import portrait from '../img/portrait.png';
import { useState, useEffect } from 'react';
//import doggy from 'firebasestorage.googleapis.com/v0/b/mywebsite-5d12a.appspot.com/o/UI1%2F3museum_map.jpg?alt=media&token=48018781-bd45-4be9-afe2-9663e2ab129b';
import { db } from '../firebase'
import { collection, doc, getDocs } from 'firebase/firestore'

const images = ["..//firebasestorage.googleapis.com/v0/b/mywebsite-5d12a.appspot.com/o/UI1%2F3museum_map.jpg?alt=media&token=48018781-bd45-4be9-afe2-9663e2ab129b", "../www.art-antwerp.com/wp-content/uploads/sites/253/2021/11/image001-3-1024x643.jpg"]

function UI() {
    return (
        // if id is UI, return this page met die inhoud. else niets. of misschien knoppen voor de andere projecten.

        <div className="generalContainerBody">
            <div className="container">
                <div className="top_title">

                </div>
                <div className="bottomLeft">

                </div>
                <div className="bottomRight">
                    <h3>test right</h3>
                    <img src="{images[1]}" alt="test" />
                </div>
            </div>
        </div>
    )
}

export default UI