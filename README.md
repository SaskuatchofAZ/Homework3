# Homework3
Javascript homework for U of A coding bootcamp week 3

I tried to write this fancy little script to create a password with varying
characters and lengths. In theory what it should do is: when the user clicks the
generate password button, it confirms that user wants a password, then it asks
for a desired password length. If the length is less than 8 or more than 128, it 
stops the operation, otherwise it asks if the user wants Uppercase, Lowercase,
Special, and or Numerical characters in the password and, based on what the user
specifies, pushes arrays containing those characters into another array for later
use. 

To generate the password I first generate a random number between 0 and the length
of what I will refer to as the SuperArray to select an array within. Then I
generate a random number between 0 and the length of the array chosen from the 
SuperArray prior. That number is used to chose the specific character from the 
randomly chosen array, which is then pushed into an array that will later be 
concatinated into the final password. This process is repeated so that the final 
password is the length the user desired. That end array is then concatinated into
into a string and printed onto the page in the given box.

Theoretically, that is.