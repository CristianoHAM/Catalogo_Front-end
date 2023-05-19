import "./card.css"

interface CardProps{
    title: string,
    model: string,
    brand: string,
    year: number,
    img: string
}


export function Card({ title, model, brand, year, img} : CardProps){
    return(
        <div className="card">
            <img src={img}/>
            <h2><b>{brand} {model} - {year}</b></h2>
            <p>{title}</p>
        </div>

    )
}