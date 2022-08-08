import os
import time, random

def clear():
    os.system("cls")

def drawHangman(step):
    clear()
    hangman = [" _____"," |   |"," |   "," | "," | ","_|_"]
    if step > 0:
        hangman[2] += ("@")
    if step ==2:
        hangman[3] += ("  |")
    if step > 2:
        hangman[3] += (",/|")
    if step > 3:
        hangman[3] += (r"\,")
    if step > 4:
        hangman[4] += ("_/")
    if step > 5:
        hangman[4] += (r" \_")
    for i in range(len(hangman)):
        print (hangman[i])

playerNumber = int(input("How many players want to join? "))
if playerNumber == 2: 
    word = input("Player 2, enter the word player 1 has to guess: ")
else:
    try:
        from english_words import english_words_lower_alpha_set
        englishDictionary = english_words_lower_alpha_set
        word = englishDictionary.pop()
    except Exception as i:
        print ("An error occured while selecting the word:", i , "\nSingle player mode not availible.")
        word = input("Player 2, enter the word player 1 has to guess: ")

wordLetters = set(word)
step = 0
goodLetters = []
badLetters = []

while True:
    drawHangman(step)
    for l in word:
        if l in goodLetters:
            print (l + " ", end="")
        else:
            print("_ ", end="")
    print("")
    print("Wrong guesses: ", end="")
    for i in badLetters:
        print (i+", ", end="")
    print("")

    if len(goodLetters) == len(wordLetters):
                print ("Player 1 guessed all the letters in the word: " + word)
                break
    if step == 6:
        print ("Player 1 is hanged. The word was: " +word)
        break

    if len(goodLetters) > 0:
        guess = input ("Player 1, do you want to guess the word? Press ENTER if no: ")
        if guess == word:
            print ("Player 1 guessed the word correctly.")
            break
        elif guess == "":
            print("You didnt´t guess.")
        else:
            print("Not correct.")

    letter = input("Player 1, enter your guess: ")
    if letter in badLetters or letter in goodLetters or letter == "":
        print ("Make a new guess.")
        time.sleep(3)
        continue
    else:
        if letter in wordLetters:
            goodLetters.append(letter)
        else:
            badLetters.append(letter)
            step += 1
    


