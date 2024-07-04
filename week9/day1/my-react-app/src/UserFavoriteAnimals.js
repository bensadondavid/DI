import React from 'react'

class UserFavoriteAnimals extends React.Component{
    
        render(){
            const {favAnimals} = this.props; 
            return(
                <ul>
                {favAnimals.map((animal, i) => 
                    <li key={i}> {animal}</li>
                )}
                </ul>
            )
    }
 }

 export default UserFavoriteAnimals