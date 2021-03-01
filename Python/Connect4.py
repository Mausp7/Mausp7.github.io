import os
marks =[[" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "],[" "," "," "," "," "," "," "]]

def clear():
    os.system("cls")

def drawBoard():
    clear()
    for r in range(14):
        if r == 0:
            for n in range(1,8):
                print("   "+str(n), end="")
            print("")
        elif r%2 == 1:
            print(" -----------------------------")
        else:
            for c in range(7):
                well = int(r/2)-1
                print(" | " + marks[well][c], end="")
            print(" | ")

def victoryCondition(m):
    for h in range(6): #horizontal
        for v in range(4):
            if marks[h][v] == m and marks[h][v+1] == m and marks[h][v+2] == m and marks[h][v+3] == m:
                return True
    for v in range(7): #vertical
        for h in range(3):
            if marks[h][v] == m and marks[h+1][v] == m and marks[h+2][v] == m and marks[h+3][v] == m:
                return True
    for h in range(3): #diagonal\
        for v in range(4):
            if marks[h][v] == m and marks[h+1][v+1] == m and marks[h+2][v+2] == m and marks[h+3][v+3] == m:
                return True
    for h in range(3,6): #diagonal/
        for v in range(4):
            if marks[h][v] == m and marks[h-1][v+1] == m and marks[h-2][v+2] == m and marks[h-3][v+3] == m:
                return True
    return False

player = 1
counter = 1

while True:
    drawBoard()
    if player == 2:
        m = "X"
    else:
        m = "O"
    if victoryCondition(m):
        print(m + " won the game!")
        break
    elif counter == 43:
        print ("Nobody connected 4 :(")
        break
    move = int(input("Player " + str(player) + " has to choose a column: "))
    if move < 8 and move > 0:
        for r in range(5, -2, -1):
            if r == -1:
                print("This is no longer an option.")
                break
            if marks[r][move-1] == " ":
                if player == 1:
                    marks[r][move-1] = "X"
                    player += 1
                else:
                    marks[r][move-1] = "O"
                    player -= 1
                counter += 1
                break
    else:
        print("Thats not a valid move.")


            