import firebase from 'firebase'
//require('firebase/firebase-auth')
require('firebase/firebase-auth')
import { USER_STATE_CHANGE, USER_TYPE } from '../constants'

export const customer = () => dispatch => {

    
        return dispatch({
            type: USER_TYPE,
            currentUserType: 'customer',
           
        })
     
}
export const driver = () => dispatch => {

    
    return dispatch({
        type: USER_TYPE,
        currentUserType: 'driver',
       
    })
 
}

export const userAuthStateListener = () => dispatch => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(getCurrentUserData())
        } else {
            dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true })
        }
    })
}

export const getCurrentUserData = () => dispatch => {
    firebase.firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot((res) => {
            if (res.exists) {
                return dispatch({
                    type: USER_STATE_CHANGE,
                    currentUser: res.data(),
                    loaded: true
                })
            }
        })
}

export const getCurrentUserData_driver = () => dispatch => {
    firebase.firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot((res) => {
            if (res.exists) {
                return dispatch({
                    type: USER_STATE_CHANGE,
                    currentUser: res.data(),
                    loaded: true
                })
            }
        })
}

export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("in login")
            resolve()
        })
        .catch(() => {
            console.log("in login but didnt work")
            reject()
        })
})

export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log("in register  work")
            resolve()
        })
        .catch((error) => {
            console.log("in register didnt work")
            reject(error)
        })
})

export const signOutUser = () => dispatch => {
    firebase.auth().signOut().then(function() {
        console.log(" logged out ")
    }).catch(function(error) {
        console.log(" did not log out ")
    });
}