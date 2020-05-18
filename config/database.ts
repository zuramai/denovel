import { config } from "https://deno.land/x/dotenv/mod.ts";

/*
|--------------------------------------------------------------------------
| Database Connection Interfaces
|--------------------------------------------------------------------------
|
| It will let you know available databases
| for this framework.
|
*/

interface mysql {
    hostname: string;
    username: string;
    password: string;
    db: string;
    port: number;
}

interface postgres {
    host: string;
    user: string;
    password: string;
    port: number;
    database: string;
}

interface mongo {
    hostname: string;
    username: string; //optional
    db: string;
    password: string; //optional
    port: string;
}

/*
|--------------------------------------------------------------------------
| Database Connections
|--------------------------------------------------------------------------
|
| Here are each of the database connections setup for your application.
| Of course, examples of configuring each database platform that is
| supported by Denovel is shown below to make development simple.
|
|
| All database work in Denovel is done through the Typescript ORM facilities
| so make sure you have the driver for your particular database of
| choice installed on your machine before you begin development.
|
*/

export const Mysql: mysql = {
    hostname: config().DB_HOST || 'localhost',
    username: config().DB_USER || 'root',
    password: config().DB_PASS || '',
    db: config().DB_NAME || 'denovel',
    port: 3306,
}

export const Postgres: postgres = {
    host: config().DB_HOST || 'localhost',
    user: config().DB_USER || 'root',
    password: config().DB_PASS || '',
    port: parseInt(config().DB_PORT) || 5432,
    database: config().DB_NAME || 'denovel',
}

export const Mongo: mongo = {
    hostname: config().DB_HOST || 'mongodb://localhost',
    username: config().DB_USER, //optional
    db: config().DB_NAME || 'denovel',
    password: config().DB_PASS, //optional
    port: config().DB_PORT || '27107',
}

/**
 * Export connection name
 * 
 * 
 */

export const Connection = config().DB_CONNECTION;