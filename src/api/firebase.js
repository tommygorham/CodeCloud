import app from 'firebase'

const config = {
    apiKey: "AIzaSyC3j8WcoWVr8GvPrhlI3ph6wnNPkPSySow",
    authDomain: "codecloud-e591a.firebaseapp.com",
    databaseURL: "https://codecloud-e591a.firebaseio.com",
    projectId: "codecloud-e591a",
    storageBucket: "",
    messagingSenderId: "711311470674",
    appId: "1:711311470674:web:e18dda6f4ae4217cc06f8b",
    measurementId: "G-DRNNH62JVE"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
    }

    signIn(callback) {
        console.log("Signing in.");
        var provider = new app.auth.GithubAuthProvider();
        provider.addScope('repo');
        app.auth().signInWithPopup(provider).then(function(result) {
            callback(result);
        })
        
    }

    signOut() {
        app.auth().signOut();
        console.log("Signing out.");
    }
}

export default Firebase;
