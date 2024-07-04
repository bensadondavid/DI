
import './App.css';
import Ex1 from './ex1';
import Display, {user} from './ex2';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './ex3'


function App() {
  return (
    <>
    <Ex1/>
    <Display/>
    <UserFavoriteAnimals favAnimals = {user.favAnimals}/>
    <Exercise />
    </>
  );
}

export default App;
