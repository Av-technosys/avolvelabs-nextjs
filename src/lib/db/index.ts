import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required to connect to the database.");
}

const globalForDb = globalThis as typeof globalThis & {
  dbPool?: Pool;
};

const pool =
  globalForDb.dbPool ??
  new Pool({
    connectionString,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

if (pool.listenerCount("error") === 0) {
  pool.on("error", () => console.error("Idle database connection failed."));
}

if (process.env.NODE_ENV !== "production") {
  globalForDb.dbPool = pool;
}

export const db = drizzle({ client: pool, schema });
