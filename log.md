# Project Evolution Log and Notes

---
## 16/08/2022 - Project Creation:

__NPM__: Tool used to install packages.
__NPX__: Tool used to execute packages.
__NVM__: Tool used to manage node versions.

__COMMAND USED TO CREATE REPO__: npx create-react-app --template typescript react-hiit --use-npm
_Above, the --use-npm command is set explicitly to inform that we want to keep npm as our package manager, avoiding then some possible conflict with yarn or others. This will then enforce the creation of package-lock.json instead of yarn.lock_

__START COMMAND__: npm start
_This command will run 'react-scripts start' and then the project will be able to be reached through http._

### package.json: 
Belongs to NPM, it is standard for any NPM project, contains project info in general and its dependencies.

__scripts__: Commands that npm is able to execute such as npm start

__eslintConfig__: ESLint configurations, in order to standardize code best practices

__browserList__: Browsers supported on this app.

### package-lock.json:
Closed file that we will not be changing, usually serves for dependency change history keeping.

---