<template>
    <div>
        <h1>Hello world!</h1>
        <div v-if="loggedIn">You are logged in <button @click="logout(currentProvider)">Logout</button></div>
        <div v-else>You are not logged in<button @click="login(`auth0`)">Login</button> </div>
        <p>Current provider: {{ currentProvider }}</p>
    </div>
</template>

<script setup>
const { loggedIn, user, login, logout, currentProvider } = useOidcAuth()
console.log(loggedIn.value)

</script>

<style scoped>
</style>
