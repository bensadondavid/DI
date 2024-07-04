# 🌟 Exercise 1: Cats

# Instructions

# Using this class

# # class Cat:
# #     def __init__(self, cat_name, cat_age):
# #         self.name = cat_name
# #         self.age = cat_age

class Cat:
    def __init__(self, cat_name, cat_age,):
        self.name = cat_name
        self.age = cat_age
        
    def __str__(self):
        return self.name 
        

Burmilla = Cat('Burmilla', 2)
Devon_Rex = Cat('Devon Rex', 1)
Chinchilla = Cat('Chinchilla',3)


def oldest_cat(cats):
    the_oldest = max(cats, key = lambda cat : cat.age)
    return(the_oldest)
   
older_cat = [Burmilla, Devon_Rex, Chinchilla]
oldest = oldest_cat(older_cat)


print(f'the oldest cat is {oldest_cat(older_cat)} and is {oldest.age} years old.')


# 🌟 Exercise 2 : Dogs

# Instructions

# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.



class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
        
    def __str__(self):
        return self.name
    
    def bark(self):
        return(f'{self.name} goes woof')
        
    def jump(self):
        return(f'{self.name} jumps {self.height * 2} cm')   
        
davids_hogs = Dog('Rex', 50)

print(f'{davids_hogs.bark()} and {davids_hogs.jump()} cm high')

sarahs_dog = Dog('Teacup', 20)
print(f'{sarahs_dog.bark()} and {sarahs_dog.jump()} cm high')

if sarahs_dog.height > davids_hogs.height:
    print(sarahs_dog.name)
else:
    print(davids_hogs.name)


    
# 🌟 Exercise 3 : Who’s The Song Producer?

# Instructions

# # Define a class called Song, it will show the lyrics of a song.
# # Its __init__() method should have two arguments: self and lyrics (a list).
# # Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# # Create an object, for example:

# # stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# # Then, call the sing_me_a_song method. The output should be:

# # There’s a lady who's sure
# # all that glitters is gold
# # and she’s buying a stairway to heaven
       

class Song :
    def __init__(self, lyrics) :
        self.lyrics = lyrics
        
    def sing_me_a_song(self) :
        for line in self.lyrics:
            print(line)
            
starway = Song(['There’s a lady who\'s sure',"all that glitters is gold", "and she’s buying a stairway to heaven"])

starway.sing_me_a_song()
            
            
# Exercise 4 : Afternoon At The Zoo

# Instructions

# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)
            
        
class Zoo : 
    def __init__(self, zoo_name):
        self.zooname = zoo_name
        self.animal = []
        
        
        
        
         
    
        
        