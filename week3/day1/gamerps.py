import random

# Les options du jeu
choix = ["pierre", "papier", "ciseaux"]

# Demander à l'utilisateur de faire un choix
choix_utilisateur = input("Entrez pierre, papier ou ciseaux: ").lower()

# L'ordinateur fait un choix aléatoire
choix_ordinateur = random.choice(choix)
print("L'ordinateur a choisi:", choix_ordinateur)

# Déterminer le gagnant
while True:
    if choix_utilisateur == choix_ordinateur:
        print("Égalité!")
    elif (choix_utilisateur == "pierre" and choix_ordinateur == "ciseaux") or \
        (choix_utilisateur == "papier" and choix_ordinateur == "pierre") or \
        (choix_utilisateur == "ciseaux" and choix_ordinateur == "papier"):
        print("Vous avez gagné!")
    else:
        print("Vous avez perdu!")
        
    print("merci d'avoir jouer")
