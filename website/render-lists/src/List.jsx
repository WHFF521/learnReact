import PropTypes from 'prop-types';
function List(props){
    // const fruits = [{id:1,name:'Apple',calories:95}, 
    //                 {id:2,name:'Banana',calories:105}, 
    //                 {id:3,name:'Orange',calories:62}, 
    //                 {id:4,name:'Mango',calories:202},
    //                 {id:5,name:'Pineapple',calories:452}];
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse alphabetical order 
    //fruits.sort((a, b) => a.calories - b.calories); //Numerical order
    //fruits.sort((a, b) => b.calories - a.calories); //Reverse numerical order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b></li>);
    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}
List.defaultProps = {
    category: "Category",
    items: []
}
export default List;