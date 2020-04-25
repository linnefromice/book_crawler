const sqlite3 = require('sqlite3').verbose()

const main = () => {
    const db = new sqlite3.Database('test.sqlite')
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS items(name, value)')
        const stmt = db.prepare('INSERT INTO items VALUES(?,?)')
        console.log("## INSERT")
        stmt.run(["Banana", 300])
        stmt.run(["Apple", 150])
        stmt.run(["Mango", 250])
        stmt.run(["Kiwi", 350])
        stmt.finalize();

        console.log("## SELECT")
        db.each("SELECT * FROM items", (err, row) => {
            // console.log(`${row["name"]} : ${row["value"]}`)
            console.log(`${row.name} : ${row.value}`)
        });
        db.run('DROP TABLE items')
    });
    db.close()
}

main()