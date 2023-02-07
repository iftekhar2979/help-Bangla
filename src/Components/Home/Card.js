
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import SingleCard from './SingleCard';

const Card = () => {
    const cardGroup=[
        {   
            img:'https://images.unsplash.com/photo-1607113208903-6855b60ad046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80',
            title:'Water Well',
           process:25,
           raised:625,
           goal:2500,
           variant:'warning',
            details:`Give the gift of life by supporting water well projects for communities in need. Clean water transforms lives, let's make a difference together.`
        },
        {
            img:'https://images.unsplash.com/photo-1530490125459-847a6d437825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80',
            process:45,
            goal:3800,
            raised:1200,
            variant:'success',
            title:'Help to poor Mother',
            details:`"Empower mothers in need with education, healthcare, and support. Help break the cycle of poverty and give hope for a brighter future.`
       
        },
        {
            img:'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80',
            process:65,
            goal:3500,
            raised:2275,
            variant:'info',
            title:'Child Support',
            details:'Invest in the future by supporting programs for underprivileged children. Education, nutrition, and care are key to their success.'
        }
    ]
    return (
        <>
        <CardGroup>
        
        {
            cardGroup?.map((item,index)=><SingleCard data={item} key={index}></SingleCard>)
        }
        </CardGroup>


      </>
    );
};

export default Card;