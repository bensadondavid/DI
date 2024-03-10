
# This is  Matrix    


matrix = [
    ['T', 'h', 'i', 's', '$' '#', '^'],
    ['i', 's', '%', ' ', '%', 'M', 'a', 't', 'r'],
    ['i', 'x', '?', '#', ' ', ' ', '%', '!'],
]


def my_matrix():
    alpha_characters = []
    for list in matrix:
        for items in list:
            if items.isalpha():
             alpha_characters.append(items)
            else:
                alpha_characters.append(' ')
    newlist = []
    for item in alpha_characters:
        if not newlist or not (item == ' ' and newlist[-1] == ' '):
            newlist.append(item)
      
    print(''.join(newlist))

my_matrix()

