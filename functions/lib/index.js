"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.add = functions.https.onRequest((req, res) => {
    admin.firestore().collection('items').add({
        text: req.query.text
    }).then(r => {
        res.send('Completed');
    })
        .catch(err => {
        res.send('Hubo un error');
    });
});
//# sourceMappingURL=index.js.map