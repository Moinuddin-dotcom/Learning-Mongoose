import dotenv from 'dotenv';
import path from 'path';

// 01: Normally its work then do (02) 
// dotenv.config();
// 02: Normally you wouldn't have to do this, but for some reason, the dotenv package doesn't work in the way we want it to.
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
}