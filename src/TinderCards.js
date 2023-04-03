
import React ,{useEffect, useState} from 'react'
import TinderCard from "react-tinder-card"
import database from './firebase';
import './tinder.css'

function TinderCards() {
    const [people,setpeople]=useState([]);

    useEffect(()=>{

      database.collection('people').onSnapshot(snapshot=>{
        setpeople(snapshot.docs.map(doc=>doc.data()))
      });
    


    },[])
  return (
    <div>
      <h1>Tindercards</h1>
      <div className='tinderCards_card'>

        {people.map((person)=>(
            <TinderCard className='swipe' key={person.name} preventSwipe={["up","down"]} >
                <div style={{backgroundImage:`url(${person.url})`}} className='card'>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards
