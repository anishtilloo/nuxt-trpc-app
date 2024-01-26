<script lang="ts" setup>

import { useForm } from 'vee-validate';
import * as z from 'zod';


const validationSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    // password: yup.string().min(8).max(8).required(),
  })

const { $client } = useNuxtApp();

const { user } = $client;

const { values, defineComponentBinds, errors, meta, handleSubmit  } = useForm({
    validationSchema: validationSchema,
});

const email = defineComponentBinds('email');
const password = defineComponentBinds('password');
const name = defineComponentBinds('name');

const variable = ref('');

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
  <h1>{{ variable }}</h1>
<!-- <input type="text"> -->
  <InputText 
    v-model="variable"
    type="email"
    placeholder="Your email"
    label="Username"
    name="email"
    />
</template>
