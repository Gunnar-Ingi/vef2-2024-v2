import { Client } from 'pg'

const client = new Client()
await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // hello world!
await client.end()