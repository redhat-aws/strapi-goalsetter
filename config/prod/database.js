module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "goalora-ha2.goalsetter.svc"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "goalsetter"),
        user: env("DATABASE_USERNAME", "goalsetter-admin"),
        password: env("DATABASE_PASSWORD", "<your-password>"),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false)
        }
      },
    }
  });