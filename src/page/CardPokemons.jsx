import "../assets/css/pokemones.css";

import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardPokemons () {
    const {name} = useParams();
    const [data,setData]= useState([])

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            setData(response.data)
        })
        .catch(error=>{
            console.log(error)
        });
    },[name])

    return (
        <div>
            {data.abilities &&
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={data.sprites.other.home.front_default} className="img-fluid rounded-start" alt="pokemon${name}" />
                    </div>
                    <div className="col-md-8 cardTex">
                            <ul >
                            <h5 className="card-title"><b>{name}</b></h5>
                            <li className="card-text">{data.stats[0].stat.name}: {data.stats[0].base_stat}</li>
                            <li className="card-text">{data.stats[1].stat.name}: {data.stats[1].base_stat}</li>
                            <li className="card-text">{data.stats[2].stat.name}: {data.stats[2].base_stat}</li>
                            <li className="card-text">{data.stats[3].stat.name}: {data.stats[3].base_stat}</li>
                            <li className="card-text">{data.stats[4].stat.name}: {data.stats[4].base_stat}</li>
                            <li className="card-text">{data.stats[5].stat.name}: {data.stats[5].base_stat}</li>
                            <li className="card-text"><small className="text-muted">{data.types[0].type.name} </small></li>
                            </ul>
                    </div>
                </div>
            </div>
        }
    </div>
    )}