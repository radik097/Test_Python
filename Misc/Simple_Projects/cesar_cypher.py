# This script demonstrates basic data protection. It takes a message and hides it by shifting every letter forward by 3 steps in the alphabet (e.g., 'A' becomes 'D').

# 1. Ask the user for a secret message
secret_message = input("Enter a message to hide: ")

scrambled_message = ""

# 2. Look at each letter in the message one by one
for letter in secret_message:

    # Check if the character is a real letter, not a space or exclamation point
    if letter.isalpha():
        # Shift the letter forward by 3 positions in the alphabet
        shifted_letter = chr(ord(letter) + 3)
        scrambled_message = scrambled_message + shifted_letter
    else:
        # If it is a space or punctuation, leave it exactly as it is
        scrambled_message = scrambled_message + letter

# 3. Show the hidden result
print(f"Your encrypted message is: {scrambled_message}")
