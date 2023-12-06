const KeyCloakStrategy = require("passport-keycloak-oauth2-oidc");

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    providers: [
      {
        uid: "keycloak",
        displayName: "Keycloak",
        icon: "https://raw.githubusercontent.com/keycloak/keycloak-admin-ui/main/themes/keycloak/logo.svg",
        createStrategy: (strapi) =>
          new KeyCloakStrategy(
            {
              clientID: env("KEYCLOAK_CLIENT_ID"),
              realm: env("KEYCLOAK_REALM"),
              publicClient: env.bool("KEYCLOAK_PUBLIC_CLIENT", false),
              clientSecret: env("KEYCLOAK_CLIENT_SECRET"),
              sslRequired: env("KEYCLOAK_SSL_REQUIRED"),
              authServerURL: env("KEYCLOAK_AUTH_SERVER_URL"),
              callbackURL:
                strapi.admin.services.passport.getStrategyCallbackURL(
                  "keycloak"
                ),
            },
            (accessToken, refreshToken, profile, done) => {
              done(null, {
                email: profile.email,
                username: profile.username,
              });
            }
          ),
      },
    ],
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});