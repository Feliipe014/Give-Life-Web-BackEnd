const express = require('express')
const cors = require('cors')
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyA1NM__jriJXE5OfHvUllJ14xHHbTx9ZVg",
    authDomain: "givelife-63342.firebaseapp.com",
    projectId: "givelife-63342",
    storageBucket: "givelife-63342.appspot.com",
    messagingSenderId: "866850014670",
    appId: "1:866850014670:web:9b5ed31894a8e509b5d79f",
    measurementId: "G-NFBKQCQDVZ"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const Doacao = db.collection('doacao');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({msg: "Olá NodeJS"});
})

app.get('/doacoes', async (req, res) => {
    const snapshot = await Doacao.get();
    const doacoes = snapshot.docs.map( doc => ({id: doc.id, ...doc.data()}));

    res.send(doacoes);
})

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})