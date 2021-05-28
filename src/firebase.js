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
export const auth = firebase.auth()
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)


const db = firebaseApp.firestore()
const proyectosCollection = db.collection('proyectos')
const usuariosCollection = db.collection('usuarios')

export{
  db
}

export const createproyecto = proyecto => {
  return proyectosCollection.add(proyecto)
}

export const getproyecto = async id => {
  const proyecto = await proyectosCollection.doc(id).get()
  return proyecto.exists ? proyecto.data() : null
}

export const updateproyecto = (id) => {

  const estadoref = proyectosCollection.doc(id);

  return estadoref.update({
      estado:'Publicado'
  })
  
}

export const deleteproyecto = id => {
  return proyectosCollection.doc(id).delete()
}

export const useLoadproyectos = () => {
  const proyectos = ref([])
  const close = proyectosCollection.onSnapshot(snapshot => {
    proyectos.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return proyectos
}

export const useLoadusuarios = () => {
  const usuarios = ref([])
  const close = usuariosCollection.onSnapshot(snapshot => {
    usuarios.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return usuarios
}