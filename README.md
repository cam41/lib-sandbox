# How to create and publish a library

Reference: [Demo of local library creation and installation.](https://www.youtube.com/watch?v=U--hmDBGfa8).

1. Create workspace and library name /n

````ng new workspaceName --create-application=false
cd workspaceName
ng generate library libraryName```

2. Make edits for library/ what I want exported (the bulk of the work)

3. ng build libraryName

4. cd into dist/libraryName

5. run npm pack

6. inside dist/libraryName, there will be a .tgz file. This can be installed locally as a library from a separate client application by creating the path to it within the package.json. i.e. "demo-lib": "../../library/dist/demolib/demolib-0.0.1.tgz"

7. In client application, run npm install

## Local Installation

8. Check that the library downloaded in node_modules to confirm it downloaded.

## Publish and Install

9. run ng build --prod to ensure it is build in ViewEngine.

Reference: https://github.com/angular/angular/issues/37973.

10. cd into dist/libraryName

11. run npm publish. You may need to alter the version in your package.json if you have the same version already published and repeat steps 9 and 10.
    **NOTE**: If your npm account isn't connected already, run npm adduser and follow the prompts.

12. In client application, import what is needed from the library (i.e. 10:10 of YT video) in component.ts file and use it within the HTML file.
````
