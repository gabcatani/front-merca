import { useState } from "react"

type cardProps = {
    results: Array<[]>
    map: any
}

type characterProps = {
    id: number
    name: string
    status: string
    species: string
    type: string
    image: string
}

export function Cards(results : cardProps) {

    const [displayCards, setDisplayCards] = useState('')
    

    return (
        <ul>
            {
            results.results?.map((result: characterProps) => {
                return (
                    <li className="card" key={result.id}>
                        <img src={result.image} alt={result.name} />
                        <div className="card-body">
                            <h2>{result.name}</h2>
                            <p>{result.species}</p>
                            <p>{result.status}</p>
                        </div>
                     </li>
                )
            })}
        </ul>
    )
}