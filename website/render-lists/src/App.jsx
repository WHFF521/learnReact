import List from "./List"
function App() {

  const fruits = [{id:1,name:'Apple',calories:95}, 
                    {id:2,name:'Banana',calories:105}, 
                    {id:3,name:'Orange',calories:62}, 
                    {id:4,name:'Mango',calories:202},
                    {id:5,name:'Pineapple',calories:452}];
  const vegetables = [{id:1,name:'Carrot',calories:41},
                    {id:2,name:'Potato',calories:77},
                    {id:3,name:'Onion',calories:40},
                    {id:4,name:'Broccoli',calories:55},
                    {id:5,name:'Spinach',calories:23}];
  return (
    <>
    {fruits.length>0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length>0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
