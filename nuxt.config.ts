// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  oidc: {
    // Your other OIDC configurations
    defaultProvider: "auth0",
    providers: {
      auth0: {
        audience: process.env.NUXT_OIDC_PROVIDERS_AUTH0_AUDIENCE,
        responseType: 'code',
        redirectUri: process.env.NUXT_OIDC_PROVIDERS_AUTH0_REDIRECT_URI,
        baseUrl: process.env.NUXT_OIDC_PROVIDERS_AUTH0_BASE_URL,
        clientId: process.env.NUXT_OIDC_PROVIDERS_AUTH0_CLIENT_ID,
        clientSecret: process.env.NUXT_OIDC_PROVIDERS_AUTH0_CLIENT_SECRET,
        grantType: 'authorization_code',
        scope: ['openid', 'email'],
        validateIdToken: true,
        validateAccessToken: true,
        exposeAccessToken: true,
        additionalTokenParameters: {
          audience: process.env.NUXT_OIDC_PROVIDERS_AUTH0_AUDIENCE,
        },
        tokenRequestType: 'json',
      },
    },
    session: {
      expirationCheck: true,
      automaticRefresh: true,
      expirationThreshold: 3600,
    },
    middleware: {
      globalMiddlewareEnabled: false,  // Disable global middleware
    }
  },
  modules: ["nuxt-oidc-auth"]
})