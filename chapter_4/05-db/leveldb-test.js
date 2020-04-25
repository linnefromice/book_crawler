const levelup = require('level')
const db = levelup('./output/leveldb')

const testGet = () => {
    console.log("EXECUTE testGet")
    db.get('Apple', (err, value) => {
        if (err) {
            console.log(`Error ${err}`)
            return
        }
        testBatch()
    })
}

const testBatch = () => {
    console.log("EXECUTE testBatch")
    db.batch()
        .put('Mango', 'yellow')
        .put('Banana', 'yellow')
        .put('Kiwi', 'green')
        .write(() => testGet2())
}

const testGet2 = () => {
    console.log("EXECUTE testGet2")
    db.get('Banana', (err, value) => {
        if (err) {
            console.log(`Error ${err}`)
            return
        }
        console.log(`Banana=${value}`)
    })
}

const main = () => {
    db.put('Apple', 'red', (err, value) => {
        if (err) {
            console.log(`Error ${err}`)
            return
        }
        testGet();
    });
}

main();