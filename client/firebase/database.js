import firebase from 'firebase';

const config = {
  apiKey: ' AIzaSyA4adxTuFRg_5QwqFeLXQ13T3U8fqTEgss',
  authDomain: 'hockeyreminder-b6041.firebaseapp.com',
  databaseURL: 'https://hockeyreminder-b6041.firebaseio.com/'
};

firebase.initializeApp(config);
// const database = firebase.database();

export default firebase;
