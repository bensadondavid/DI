# # Exercise 1 : What Are You Learning ?

# # Instructions

# # Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# # Call the function, and make sure the message displays correctly.

def display_message():
    print('Hi, I\'m learning Python in DI')
    
display_message()


# # 🌟 Exercise 2: What’s Your Favorite Book ?

# # Instructions

# # Write a function called favorite_book() that accepts one parameter called title.
# # The function should print a message, such as "One of my favorite books is <title>".
# # For example: “One of my favorite books is Alice in Wonderland”
# # Call the function, make sure to include a book title as an argument when calling the function.


def favorite_book(title):
    print(f'One of my favourite book is {title}')
    
favorite_book('Harry Potter')


# # 🌟 Exercise 3 : Some Geography

# # Instructions

# # Write a function called describe_city() that accepts the name of a city and its country as parameters.
# # The function should print a simple sentence, such as "<city> is in <country>".
# # For example “Reykjavik is in Iceland”
# # Give the country parameter a default value.
# # Call your function.


def describe_city(city_name, country_name='Israel'):
    print(f'{city_name} is in {country_name}')
    
describe_city('Jerusalem', 'iceland')


# # Exercise 4 : Random

# # Instructions

# # Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# # Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random
def number(accepted_number):
    if accepted_number >= 1 and accepted_number <=100:
            random_number = random.randint(1, 100)
            if random_number == accepted_number:
                print('You got it !')
            else:
                print('You failed')
                print(random_number) 

number(4)


# # 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !

# # Instructions

# # Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# # The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# # Call the function make_shirt().

# # Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# # Make a large shirt with the default message
# # Make medium shirt with the default message
# # Make a shirt of any size with a different message.

# # Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size, text):
    print(f'The size of the shirt is {size} and the text is {text}')

make_shirt('M', 'Developper Institute')        

def make_shirt(size, text = 'I love Python'):
    print(f'The size of the shirt is {size} and the text is {text}')

make_shirt('L') 
make_shirt('M')
make_shirt('XL', 'Hey')

# # 🌟 Exercise 6 : Magicians …

# # Instructions

# # Using this list of magician’s names

# # magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# # Create a function called show_magicians(), which prints the name of each magician in the list.
# # Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# # Call the function make_great().
# # Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(name):
    for name in magician_names:
        print(f'The name of the magician is {name}')

show_magicians(magician_names)

def make_great():
    great_names = []
    for names in magician_names:
        great_names.append(f'The great {names}')
    print(great_names)    

make_great()
show_magicians(magician_names)


# # 🌟 Exercise 7 : Temperature Advice

# # Instructions

# # Create a function called get_random_temp().
# # This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# # Test your function to make sure it generates expected results.

# # Create a function called main().
# # Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# # Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# # Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# # below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# # between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# # between 16 and 23
# # between 24 and 32
# # between 32 and 40

# # Change the get_random_temp() function:
# # Add a parameter to the function, named ‘season’.
# # Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# # Now that we’ve changed get_random_temp(), let’s change the main() function:
# # Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# # Use the season as an argument when calling get_random_temp().

# # Bonus: Give the temperature as a floating-point number instead of an integer.
# # Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.


import random

def get_random_temp():
    return int(random.randint(-10, 40))

print(get_random_temp())

def main():
    temp = get_random_temp()
    print(f'The temperature right now is {temp} degree Celsius')
    if temp < 0:
        print('Brrr, that’s freezing! Wear some extra layers today')
    elif temp >= 0 and temp <= 16:
        print('Quite chilly! Don’t forget your coat')
    elif temp > 16 and temp <= 23:
        print('You can go out without your coat')
    elif temp > 23 and temp <= 32:
        print('It is quite hot outside')
    elif temp >= 33 and temp <= 40:
        print('Don\'t go outside it\'s dangerous')

main()


import random

def get_random_temp(season):
    if season == 'Winter':
      return int(random.randint(-10, 4))
    elif season == 'Autumn':
        return int(random.randint(5, 15))
    elif season == 'Spring':
        return int(random.randint(16, 26))  
    elif season == 'Summer':
        return int(random.randint(27, 40))


def main():
    whatseason = input('What is the season ? ')
    temp = get_random_temp(whatseason)
    print(f'The temperature right now is {temp} degree Celsius')
    if temp < 0:
        print('Brrr, that’s freezing! Wear some extra layers today')
    elif temp >= 0 and temp <= 16:
        print('Quite chilly! Don’t forget your coat')
    elif temp > 16 and temp <= 23:
        print('You can go out without your coat')
    elif temp > 23 and temp <= 32:
        print('It is quite hot outside')
    elif temp >= 33 and temp <= 40:
        print('Don\'t go outside it\'s dangerous')

main()

# 🌟 Exercise 8 : Star Wars Quiz

# Instructions

# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quizz():
    wrong_answers = []
    score = 0
    for item in data:
        answers = input(item['question'])
        if answers == item['answer']:
            print('Great')
            score +=1
        else:
            print('You failed')
            wrong_answers.append(item["question"])
    print(f'Your have {score} good anwers and {len(wrong_answers)} wrong answers')
    print(wrong_answers)

    
quizz()