user = (input('write a string'))
if len(user) == 10:
    print('perfect string')
elif len(user) > 10:
    print('string too long')
elif len(user) < 10:
    print('string not long enough')
    

print('Première lettre:', user[0])
print('Première lettre:', user[-1])


user2 = 'Hello World'
word_rebuilt = ''
for letter in user2:
    word_rebuilt += letter
    print(word_rebuilt)
    
    
