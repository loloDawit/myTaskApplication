// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  firebase:{
    apiKey: "AIzaSyCVwkH1C0GQ8GVLRjO0ZDV-XbmHzIgm8jA",
    authDomain: "fs1proddb.firebaseapp.com",
    databaseURL: "https://fs1proddb.firebaseio.com",
    projectId: "fs1proddb",
    storageBucket: "fs1proddb.appspot.com",
    messagingSenderId: "831282212654"
  }
};
