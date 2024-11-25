import knex from "knex";

const config = {
    client: process.env.CLIENT || '',
    connection: {
        host: process.env.HOST || "",
        port: process.env.DB_PORT || "",
        user: process.env.USER || "",
        password: process.env.PASSWORD || "",
        database: process.env.DATABASE || "",
    },
    migration: {
        directory: './migrations'
    }
}

export const db = knex(config);
