<script lang="ts" setup>

const { $client } = useNuxtApp()

const { user } = $client;

const createUser = async () => { 
  return (
    await user.addUser.mutate({ 
      userName: "Shripad Dhopate",
      userMobileNumber: "1234567890",
      userEmail: "shreedhopate@gmail.com",
      userAddress: "Omkar Nagar, Nagpur",
      userHobbies: ["Coding", "Music", "Playing flute"], 
    }));
}

const getUser = async () => {
  return (
    await user.getUser.query({
      id: "aa69f76e-9f11-4aa4-8f01-e93063eb8595"
    })
  )
}

</script>


<template>
  <h1>This is home page</h1>
  <button @click="createUser">Create User</button>
  <button @click="getUser">Get User</button>
</template>
