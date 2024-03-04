#  Challenge 1

# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

user_num = int(input('Give me a number '))
user_length = int(input('Give me a length '))
number_list = [user_num]

for i in range(2, user_length +1):
    number_list.append(user_num * i)
print(number_list)

# Challenge 2

# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes

user = input('Give me a word ')
user_new = user[0]

for letter in range(1, len(user)):
    
    if user[letter] != user_new[-1]:
        user_new += user[letter]
    
print(user_new)
    
        
        