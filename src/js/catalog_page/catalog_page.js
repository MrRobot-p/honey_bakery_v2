// const { MongoClient } = require('mongodb');

// const client = new MongoClient('mongodb+srv://PhantomAD:5486784599@honeybakery.hb0lq.mongodb.net/HoneyBakery?retryWrites=true&w=majority');

// const start = async() => {
//     try {
//         await client.connect()
//         console.log('Соединение установлено')
//         const users = client.db().collection('users')
//         const user = await users.findOne({ name: "Александра" })
//         console.log(user)
//     } catch (e) {
//         console.log(e)
//     }
// }

// start();
