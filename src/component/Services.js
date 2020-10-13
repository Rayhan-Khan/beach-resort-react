import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:
                "Lorem ipsum dolar sit amet consectetur adipsisicing elit.magni,corporis"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:
                "Lorem ipsum dolar sit amet consectetur adipsisicing elit.magni,corporis"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:
                "Lorem ipsum dolar sit amet consectetur adipsisicing elit.magni,corporis"
            },
            {
                icon:<FaBeer/>,
                title:"free Strongest Beer",
                info:
                "Lorem ipsum dolar sit amet consectetur adipsisicing elit.magni,corporis"
            }
        ]
    }
    render() {
        return (
               <section className='services'>
                <Title title='services'/>
                <div className="services-center">
                    {
                        this.state.services.map((item,index)=>{
                            return(
                                <article key={index} className='service'>
                                        <span>{item.icon}</span>
                                     <h6>{item.title}</h6>
                            <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
                </section>
            
        )
    }
}
