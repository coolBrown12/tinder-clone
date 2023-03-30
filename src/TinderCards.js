
import React ,{useState} from 'react'
import TinderCard from "react-tinder-card"
import './tinder.css'

function TinderCards() {
    const [people,setpeople]=useState([
        {
            name:'sonny',
            url:'https://th.bing.com/th/id/R.070ca72cf70f62f7c03a36a6735b2029?rik=vNJHN3QvR5VBVQ&riu=http%3a%2f%2fstatic.businessinsider.com%2fimage%2f54e75c79eab8ea2e0cd8ea8d%2fimage.jpg&ehk=%2fDFsZd65uQPagieFjic5W9e8ZY4q%2fSKNyitl9k%2brj6A%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            name:'mark zukberberg',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
        }
    ]);
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
