
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
             print(alpha_characters)

my_matrix()

