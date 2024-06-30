export default function Pokemon({ name, image })
{
    return <div>
        <div>{name}</div>
        <img src={image}></img>
    </div>;
}

