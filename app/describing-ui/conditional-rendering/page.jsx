function Item({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + ' ✅'}
                </del>
            ) : (
                name
            )}
            </li>
    );
}

function Item2({ name, isPacked }) {
    return (
        <li className="item">
             {isPacked ? name + ' ✅' : name }
        </li>
    );
}

function Item3({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && '✅'}
        </li>
    );
}

function Item4({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = name + " ✅"
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

function Item5({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
        <del>
            {name + " ✅"}
        </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}


export default function PackingList() {
    return (
        <>
            <h1>Hudson's packing list</h1>
            <ul>
                <Item5
                    name="Unkown Pleasures"
                    isPacked={true}
                />
                <Item5
                    name="Blowout Comb"
                    isPacked={false}
                />
            </ul>
        </>
    );
}