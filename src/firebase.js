import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyDcZXUIW78bkB_Iuzp5Mzc4u5UZRnlqvAg",
    authDomain: "multirush-b945a.firebaseapp.com",
    projectId: "multirush-b945a",
    storageBucket: "multirush-b945a.appspot.com",
    messagingSenderId: "1057218727804",
    appId: "1:1057218727804:web:761cf906d89d8e4ec35ef9"
    
  };

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}