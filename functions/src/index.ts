import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


admin.initializeApp(functions.config().firebase);

exports.add = functions.https.onRequest((req,res)=>{
  admin.firestore().collection('items').add({
    text: req.query.text
  }).then(r => {
    res.send('Completed')
  })
  .catch(err => {
    res.send('Hubo un error')
  });
});
