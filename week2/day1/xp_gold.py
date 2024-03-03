#Exercise 1

print('Hello World\n' *4 + 'I love python\n'*4)

#Exercice 2

user = int(input('pick a month (between 1 to 12)'))
if user >= 3 and user <= 5:
    print('The season is Spring')
elif user >= 6 and user <= 8:
    print('The season is Summer')
elif user >= 9 and user <= 11:
    print('the season is Autumn')
else:
    print('The season is Winter')
    