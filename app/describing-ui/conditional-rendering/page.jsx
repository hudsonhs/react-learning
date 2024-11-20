function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name}  ✅</li>
    }
    return <li className="item">{name}</li>
}

export default function PackingList() {
    <>
        <h1>Hudson's packing list</h1>
        <ul>
            <Item
                name="Unkown Pleasures"
                isPacked={true}
            />
        </ul>
    </>
}