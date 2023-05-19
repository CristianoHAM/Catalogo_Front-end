interface CreateModalProps{
    title: string,
    model: string,
    brand: string,
    year: number,
    img: string
}


export function CreateModal({ title, model, brand, year, img} : CreateModalProps){
    return(
        <div className="card">
            <img src={img}/>
            <h2><b>{brand} {model} - {year}</b></h2>
            <p>{title}</p>
        </div>

    )
}