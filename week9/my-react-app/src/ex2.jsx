
const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

const firstName = user.firstName
const lastName = user.lastName

function Display(){
    return(
        <>
        <h3> {firstName} </h3>
        <h3>{lastName}</h3>
        </>
    )
}
export default Display
export {user}
