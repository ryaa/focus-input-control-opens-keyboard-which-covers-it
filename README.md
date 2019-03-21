# focus-input-control-opens-keyboard-which-covers-it
This is a repo to reproduce the problem for the issue https://github.com/ionic-team/capacitor/issues/1331

# To install please:
* make sure to install nodejs and ionic cli (see details in Ionic Info output below)
* issue `npm install`
* issue `ionic build`
* issue `npx cap sync`
* issue `npx cap open ios` and build/deploy from XCode

# Ionic Info output
```
Ionic:

   ionic (Ionic CLI)             : 4.10.3 (/Users/alexryltsov/.nvm/versions/node/v10.14.2/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 4.1.1
   @angular-devkit/build-angular : 0.13.6
   @angular-devkit/schematics    : 7.2.4
   @angular/cli                  : 7.3.6
   @ionic/angular-toolkit        : 1.4.1

System:

   NodeJS : v10.14.2 (/Users/alexryltsov/.nvm/versions/node/v10.14.2/bin/node)
   npm    : 6.5.0
   OS     : macOS Mojave
```