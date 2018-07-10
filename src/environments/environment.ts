// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBlK7rCyruA4UpwgDbXdSs6GX2AB3EvLuI',
    authDomain: 'stingerwebplatform.firebaseapp.com',
    databaseURL: 'https://stingerwebplatform.firebaseio.com',
    projectId: 'stingerwebplatform',
    storageBucket: 'stingerwebplatform.appspot.com',
    messagingSenderId: '1092380160109'
  }
};
