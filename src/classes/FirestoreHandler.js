


class FirestoreHandler{
    constructor(firestore){
        this.db = firestore;
    }

    updateUserDocument(updatedUser){
        //firestore
    }

    getPosts(callback){
        this.db.collection("Posts").get().then((snapshot)=>{
            const posts = [];
            snapshot.docs.forEach(doc =>{
                //console.log(doc.data());
                posts.push(doc.data());
            })
            //console.log(posts);
            callback(posts);
        });
    }

    savePost(post){
        this.db.collection("Posts").add(post);
    }
}
export default FirestoreHandler