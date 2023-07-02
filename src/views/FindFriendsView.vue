<script setup>
import { useUserStore } from "../store/user-store";
const userStore = useUserStore();

const hideMe = (user) => {
  if(user.sub === userStore.sub) {
    return false;
  }
  return true
}
</script>

<template>
  <div
    id="FindFriends"
    class="pt-[100px] overflow-auto fixed h-[100vh] w-[420px]"
  >
    <template v-for="user in userStore.allUsers" :key="user.sub">
      <div v-if="hideMe(user)" class="flex w-full p-4 items-center cursor-pointer">
        <img class="rounded-full mr-4 w-10" :src="user.picture || ''" />

        <div class="w-full">
          <div class="flex justify-between items-center">
            <div class="text-[15px] text-gray-600">
              {{ user.firstName }} {{ user.lastName }}
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-full text-[15px] text-gray-600">
              Hi, i am using Chat Web!
            </div>
          </div>
        </div>
      </div>
      <div class="border-b w-[calc(100%-80px)] float-right"></div>
    </template>
  </div>
</template>
