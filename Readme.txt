---Project(2).Playwright Basics With Hooks--

Purpose: Same as Project(1) solution(i.e, https://github.com/KC0122/playwright-core-project1.git)

i.e,
-Launch a browser
-Navigate to a webpage(Example: BBC)
-It will check if a text exist or not (Example: BBC)

Main differance in this Project(2) is, Before All, After All hookes were used
-To launch the browser before all tests
-To close the browser after all tests
-Also,execute tests serially with the command  :  test.describe.configure({ mode: 'serial' });


******************************************************************************
Before you clone the repo, install following dependencies 

*******************************************************************************

      -Install Nodejs LTS version from
      https://nodejs.org/en/download

            -Execute the .exe and installing
            -Open the command prompt as an admin
            -Issue command:    node -v and press ENTER
            -Issue command:    npm -v and press ENTER
            -If you see the version numbers appearing for each of the above commands.(i.e,if you have successfully installed Node!)
            (if not re-start the machine and re check!)            
            
            -Create a folder annd install the latest NPM globally by issuing following commands.
                 npm install -g npm        
                
             Why NPM ?  It help us to install many software libraries and manage dependencies.
            -If successful you should be able to issue npm -v  command from directory and see the latest version number that you have just installed!
            -Clone the repo from https://github.com/KC0122/playwright-core-project1.git ,open command prompt and CD into the same folder.



 -How to install Playwright successfully ?
      -All set to Install Playwright!Cloned repo looks like this on my machine! D:\Myprojects\playwright-core-project1
      -CD into this same folder in the Command prompt
      -Double check by re issuing node -v & npm -v one after another, to see if they are still working or not.
      (Note in some machines the VSCode terminal window might give you an error if you issue the npm -v command.But in a command prompt as an admin, you should be able to see the version)
      
      -If all good, now issue the below command to install the latest Playwright version
         npm init playwright@latest
      -
       During the installation, it will ask few questions and after entering "Y" for the first question,
         keep pressing 'Enter' to go ahead with the defaults values.
         Once done, you should see below message on the command prompt
         
         Visit https://playwright.dev/docs/intro for more information. ✨
        
-Issue   npx playwright test  command, and you will see 2 tests are passing!
           
           Happy hacking! 🎭

-To open the report issue the below command
   npx playwright show-report!

  
***********************************************************
 Lessons Learned
**************************************************************
-With below 3 lines, you can launch browsers with seperate contexts
  brows  = await chromium.launch(); 
  browcntx1 = await brows.newContext();
  page = await browcntx1.newPage();

