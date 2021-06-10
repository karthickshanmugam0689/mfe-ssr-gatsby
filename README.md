# Module Federation with SSR

## Folder Contents
* gatsby-learner-kit - Contains Gatsby code for server side rendering
* mfe1 - Microfrontend 1
* mfe2 - Microfrontend 2

### gatsby-learner-kit
*src/pages.index.js* - Contains code to include mfe1, mfe2, mfe2 with some delay
First load the textbox along with static content and then replace the textbox with the `MFE1/TextInput` from mfe1. Take care that the transition should be smooth and the text entered in textbox of ssr should be persisted in the textbox of `MFE1/TextInput`
The text entered in `MFE1/TextInput` will be shown to the user via `MFE2/TextOutput`. It is written such that `MFE2/TextOutput` is loaded twice - directly and with some delay
Take care that both the components (directly and with some delay) displays the text properly which is entered in `MFE1/TextInput`

### mfe1
*TextInput.js* - Provider of TextInput mfe

### mfe2
*TextOutput.js* - Provider of TextOutput mfe

## Order of execution

### Installation
1. Go to mfe1 folder in terminal and then do `yarn` to install the dependancies.
2. Go to mfe2 folder in terminal and then do `yarn` to install the dependancies.
3. Go to gatsby-learner-kit folder in terminal and then do `yarn` to install the dependancies.

### Execution
1. Go to mfe1 folder in terminal and then do `yarn webpack serve` to run a server on mfe1. The server is running on [http://localhost:8083](http://localhost:8083)
2. Go to mfe2 folder in terminal and then do `yarn webpack serve` to run a server on mfe2. The server is running on [http://localhost:8082](http://localhost:8082)
3. Go to gatsby-learner-kit folder in terminal and then do `yarn develop` to run a server on gatsby-learner-kit. The server is running on [http://localhost:8000](http://localhost:8000)
4. Make changes in `mfe1/TextInput` and in `mfe2/TextOutput` and see the changes on [http://localhost:8000](http://localhost:8000)
