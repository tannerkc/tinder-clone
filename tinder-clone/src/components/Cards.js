import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../axios';
import './css/Cards.css';

function Cards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) =>{
        console.log("removing: "+nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (id) => {
        console.log(`id: ${id} left the screen`)
    }

    return (
        <div className="cards">
            <div className="card_container">
                {people.map((person)=>(
                    <TinderCard
                        className="swipe"
                        key={person._id}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person._id)}>
                            <div style={{ 
                                    backgroundImage: `url(${person.imgUrl})`
                                }}
                                className="card"
                             >
                                <h3>{person.name}</h3>
                            </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards;
