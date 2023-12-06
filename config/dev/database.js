module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "192.168.1.195"),
      port: env.int("DATABASE_PORT", 32118),
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