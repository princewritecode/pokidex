import './Pokemon.css';
export default function Pokemon({ name, image })
{
    return <div className="pokemon">
        <div className='pokemon-name'>{name}</div>
        <div>
            <img className='pokemon-img' src={image}></img>
        </div>

    </div>
        ;
}

