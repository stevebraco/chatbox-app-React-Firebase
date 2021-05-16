import Rebase from 're-base' //npm re-base  permet de faciliter l'intégration de firebase dans un projet React
import firebase from 'firebase/app'
import 'firebase/database' // base de données

// Informations pour se connecter à l'application
const firebaseApp =  firebase.initializeApp({
  //connect Firebase
  
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base