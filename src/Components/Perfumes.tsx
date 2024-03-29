const items = [
    {title: 'Libre', isYSL: true, id: 1},
    {title: 'Black Opium', isYSL: true, id: 2},
    {title : 'Good Girl', isYSL: false, id: 3}
];


const Perfumes = () => {
    const listItems = items.map(item =>
        <li
        key ={item.id}
        style ={{
            color: item.isYSL ? 'blue' : 'red'
        }}
        >
            {item.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}

export default Perfumes;