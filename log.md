# Project Evolution Log and Notes

---
## 16/08/2022 - Project Creation:

__NPM__: Tool used to install packages.
__NPX__: Tool used to execute packages.
__NVM__: Tool used to manage node versions.

__COMMAND USED TO CREATE REPO__: npx create-react-app --template typescript react-hiit --use-npm
_Above, the --use-npm command is set explicitly to inform that we want to keep npm as our package manager, avoiding then some possible conflict with yarn or others. This will then enforce the creation of package-lock.json instead of yarn.lock_

_PS: create-react-app is also called CRA only._

__START COMMAND__: npm start
_This command will run 'react-scripts start' and then the project will be able to be reached through http._

## Project Items:

### package.json: 
Belongs to NPM, it is standard for any NPM project, contains project info in general and its dependencies.

- __scripts:__ Commands that npm is able to execute such as npm start

- __eslintConfig:__ ESLint configurations, in order to standardize code best practices

- __browserList:__ Browsers supported on this app.

### package-lock.json:
Closed file that we will not be changing, usually serves for dependency change history keeping.

### node_modules:
Contains all packages installed in the project. Managed by NPM.

### src:
All of the application code:

- __App.css:__
    Has all css annotations that are currently building the app.

- __App.tsx:__
    Contains html code.

- __index.css:__
    Contains reset configurations.

- __index.tsx:__
    Imports and renders our app.

- __react-app-env.d.ts:__
    Description file used by Typescript.

### public: 

- __robots.txt:__
    This file shows to google robots which folders we want to be indexed.
---
## 29/11/2022 - Oh Damn:

Yeah, it is been so much time since i've picked this up. Well, let's hope i get to the end of it before Christmas.

Interesting things of today:
- Creation of my first component
- Creation of Class Components
- Creation of Function Components
