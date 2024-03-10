# Instructions

# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld


user = (input('write a string'))
if len(user) == 10:
    print('perfect string')
elif len(user) > 10:
    print('string too long')
elif len(user) < 10:
    print('string not long enough')
    

print(user[0])
print(user[-1])


user2 = 'Hello World'
word_rebuilt = ''
for letter in user2:
    word_rebuilt += letter
    print(word_rebuilt)
    

