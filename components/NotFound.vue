<template>
    <div class="flex justify-center w-full">
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 ">
            <div class="text-center">
                <h1 class="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">Data not found</h1>
                <p class="mt-4 text-base leading-7 text-gray-600">Sorry, we couldn’t find  any data you’re looking for.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" class="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <NuxtLink :to="{ path: '/case/listing' }" class="flex items-center">
                            <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
                                Go back Listing
                            </span>
                        </NuxtLink>
                    </a>
                </div>
            </div>
        </main> 
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  