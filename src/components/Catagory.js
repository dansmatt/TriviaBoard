import Card from './Card'
import React,{ useEffect, useState } from 'react'

const Catagory = (props) => {
    
    const [questionLst, setQuestions] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    /* get questions for this catagory*/
    useEffect(() => {
        fetch('questionDB/'+ props.title + '.json',
        {headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }})
            .then(res =>res.json())
            .then((result) => {
                setQuestions(result.questions);
                setLoaded(true);
            },
            (error) => {
                setLoaded(true);
            })
        }, [])

    if (isLoaded){
        const cards = questionLst.slice(0,4).map((q) => <Card q={q}/>);

        return (<div className="card-column mx-auto catagory">
                    <div className={props.title + " titleCard card"}><span>{props.title}</span></div>  
                    {cards}
                </div>
        );
    } else {
        return (<div className="card-column mx-auto catagory">
                    <div className={props.title + " titleCard card"}><h2>{props.title}</h2></div>  
                    <p>loading the  questions...</p>
                </div>);
    }
}
    
export default Catagory