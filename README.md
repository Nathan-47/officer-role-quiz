# Officer Role Quiz

## Deployment
### PROJECT INSTALLATION
 * To install this project you will need to have a `live server VS Code extension`. This will allow you to view project on your local host. 
 
1.	To play the battle, first go to the code button dropdown located at top of repo in green. Click the button and download `ZIP file`.
2.	Once downloaded upload folder into VS Code, click the `live server extension` found bottom right of VS Code workspace and you are on your way.

<br />

### What I learnt
- As I am still in the process of understanding forms within PHP, I came across something new which was using the function of filter_validate_email(FVE). It is imperative that FVE is used as it checks if the email that the user has entered is valid. For the function to act this out I had to use (!filter_var($email, FILTER_VALIDATE_EMAIL)). The $email is equal to the form parameter ‘mail’ as this is the input field that the user will type their email address and thus the field can be read by the function to see if the email is not valid. 

- Understand that the (?) placeholders are used when using a sql statement that runs within the database to prevent code being written into the username input.

- I wanted to get a grasp of how passwords are matched with a user. Throughout the project i researched that a boolean that contains a $password string links back to the form password input field and the collection of arrays found within the pwdUsers row within the database to are then matched together to see if they are both equal to each other.

<br />

## Note
This project is in no way affiliated with Marvel. This project is intended as a development learning exercise.

Game may not be responsive on 700px devices. This will be updated in future.
