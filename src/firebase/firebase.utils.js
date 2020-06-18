import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './config';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth()
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }
}

const firebase = new Firebase()
export default firebase;