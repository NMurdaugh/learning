import Card from './Card.tsx'

export type KittenObjects = {
    kittens: {
        id: number;
        name: string;
        username?: string;
        email: string;
      }[];
}


function CardList({ kittens }: KittenObjects) {
    return (
        <div>
            {
                kittens.map((_, i) => {
                    return (
                        <Card
                            key={kittens[i].id}
                            id={kittens[i].id}
                            name={kittens[i].name}
                            email={kittens[i].email}
                            />
                        )       
                    }
                )
            }
        </div>
    );  
}

export default CardList