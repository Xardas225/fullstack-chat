<script setup>
// Vue methods
import { ref, onMounted } from "vue";
// Views
import MessageView from "./MessageView.vue";
import ChatsView from "./ChatsView.vue";
import FindFriendsView from "./FindFriendsView.vue";
// Icons
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";

import { useRouter } from "vue-router";
import { useUserStore } from "../store/user-store";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const router = useRouter();
const { showFriendsOpen, userDataForChat } = storeToRefs(userStore);
const open = ref(true);

onMounted(() => {
  try {
    userStore.getAllUsers();
  } catch (error) {
    console.log(error);
  }
});

const logout = () => {
  let res = confirm("Are you sute want to logout?");
  if (res) userStore.logout();
  router.push("/login");
};
</script>

<template>
  <div class="flex">
    <div id="Header" class="fixed w-[420px] z-10">
      <div
        class="bg-[#F0F0F0] 2-full flex justify-between items-center px-3 py-2"
      >
        <img
          class="rounded-full ml-1 w-10"
          :src="userStore.picture || ''"
          alt=""
        />
        <div class="flex items-center justify-center">
          <AccountGroupIcon fillColor="#515151" class="mr-6" />
          <DotsVerticalIcon
            @click="logout"
            fillColor="#515151"
            class="cursor-pointer"
          />
        </div>
      </div>

      <div id="Search" class="bg-white w-full px-2 border-b shadow-sm">
        <div
          class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md"
        >
          <MagnifyIcon fillColor="#515151" class="ml-2" :size="18" />
          <input
            @click="showFriendsOpen = !showFriendsOpen"
            class="ml-5 appearance-none w-full bg-[#F0F0F0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
            autocomplete="off"
            placeholder="Start a new Chat"
            type="text"
          />
        </div>
      </div>
    </div>

    <div v-if="showFriendsOpen">
      <FindFriendsView class="pt-18" />
    </div>

    <div v-else>
      <ChatsView class="mt-[100px]" />
    </div>

    <div v-if="userDataForChat.length">
      <MessageView />
    </div>

    <div
      v-else
      class="ml-[420px] fixed w-[calc(100vw-420px)] h-100vh bg-gray-100 text-center"
    >
      <div class="grid h-screen place-items-center">
        <div>
          <div class="w-full flex items-center justify-center">
            <img width="200" src="w-web-not-loaded-chat.png" alt="" />
          </div>
          <div class="text-[32px] text-gray-500 font-light mt-10">Chat Web</div>
          <div class="text-[14px] text-gray-600 mt-2">
            <div>Send and received messages.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
