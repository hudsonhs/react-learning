function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name}  ✅</li>
    }
    return <li className="item">{name}</li>
}

export default function PackingList() {
    return (
        <>
            <h1>Hudson's packing list</h1>
            <ul>
                <Item
                    name="Unkown Pleasures"
                    isPacked={true}
                />
                <Item
                    name="Blowout Comb"
                    isPacked={false}
                />
            </ul>
        </>
    )
}