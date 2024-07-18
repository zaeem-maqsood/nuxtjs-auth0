# Connect Auth0 OIDC to Nuxt App using Nuxt OIDC Auth

### Step 1: Install the nuxt-oidc-auth 
`npx nuxi@latest module add nuxt-oidc-auth`

make sure it's added to your modules:
nuxt.config.ts -> modules: ["nuxt-oidc-auth"]

### Step 2: Create an environment file if you haven't already

And add these variables/keys:

```
NUXT_OIDC_TOKEN_KEY=base64_encoded_key
NUXT_OIDC_SESSION_SECRET=48_characters_random_string
NUXT_OIDC_AUTH_SESSION_SECRET=48_characters_random_string
```

Refer to the nuxt-oidc-auth repo for more instructions on how to generate these values if you need help:
[nuxt-oidc-auth](https://github.com/itpropro/nuxt-oidc-auth)

Since we are using Auth0 for this setup we need a few more variables 

```
NUXT_OIDC_PROVIDERS_AUTH0_BASE_URL
NUXT_OIDC_PROVIDERS_AUTH0_CLIENT_ID
NUXT_OIDC_PROVIDERS_AUTH0_CLIENT_SECRET
NUXT_OIDC_PROVIDERS_AUTH0_REDIRECT_URI
```

You can find these values in your Auth0 dashboard. The redirect URI is important.
As per the [nuxt-oidc-auth](https://github.com/itpropro/nuxt-oidc-auth) documentation the callback for auth0 will be:
`http://localhost:3000/auth/auth0/callback`

Of course, change the URL for your environment.

### Step 4: Check the OIDC configuration in the nuxt.config.ts file
I had some issues here, please feel free to comment or raise an issue if you know better but for some 
reason passing the audience parameter or even the additional "additionalTokenParameters" still gave me 
back an opaque token (without a payload). I tried to check why this could be happening but could not
figure it out. The audience param is fros sure being sent in the payload. I even grabbed the payload
before it went out to Auth0 servers and ran it through Postman and got the same problems.

I had to go to auth0 and in my settings under General -> API Authorization Settings I added a default audience. 
This was the only way I didn't get opaque tokens back and got normal JWT tokens.

