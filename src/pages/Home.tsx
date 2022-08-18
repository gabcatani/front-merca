import { useState } from "react";
import { Cards } from "../components/Cards";
import { Filter } from "../components/Filter";
import { useData } from "../hooks/useData";

type ApiProps = any;

export function Home() {

    const [pageNumber, setPageNumber] = useState(8);
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    const { data }  = useData<ApiProps>(api)
    const { info, results } = data || {}


    return (
        <>
            <div>
                <h1 className="text-center text-bold flex justify-center text-[34px]">
                    Rick And Morty -<span className="text-blue-500 pl-1">MERCAFACIL</span>
                </h1>

                <div className="container">
                    <div className="row">
                        <div className="text-center py-8">
                            <Filter />
                        </div>
                        <div className="text-center">
                            <div className="row">
                                <div className="col-4">
                                    <Cards results={results}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}