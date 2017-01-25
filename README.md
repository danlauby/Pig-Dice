# Pig Dice Game

## By Dan and Matt

## Description

_This program is meant to emulate the Pig Dice Game which is described as a "Jeopardy Dice Game".

## Specs

| Behavior | Example Input | Example Output |
|----------|---------------|----------------|
| If the player rolls a 1, they score nothing and it becomes the next player's turn | "1" | turn total = 0, next players turn |
| If the player rolls any other number, it is added to their turn total and the player's turn continues. | "4" | turn total = 4, roll again or hold |
| If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn. | "hold" | turn total is added to overall total, Next Players Turn |
