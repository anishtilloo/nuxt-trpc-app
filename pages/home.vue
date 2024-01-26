<script lang="ts" setup>

const { $client } = useNuxtApp()

const { user } = $client;

const createUser = async () => {
  return (
    await user.addUser.mutate({
      userName: "Anish Tilloo",
      userMobileNumber: "0987654321",
      userEmail: "tillooanish@gmail.com",
      userAddress: "Pande Layout, Khamla, Nagpur",
      userHobbies: ["Coding", "Sketching", "Listining to Music", 'Watcing Movie and Tv Shows'],
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
