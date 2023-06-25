import Card from './Card.tsx'

type KittenObjects = {
    kittens: {
        id: number;
        name: string;
        username?: string;
        email: string;
      }[];
}


function CardList({ kittens }: KittenObjects) {
    const cardComponent = kittens.map((_, i) => {
        return <Card id={kittens[i].id} name={kittens[i].name } email={kittens[i].email} />
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList