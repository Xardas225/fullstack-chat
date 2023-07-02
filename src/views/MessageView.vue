<script setup>
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import EmoticonExcitedOutlineIcon from "vue-material-design-icons/EmoticonExcitedOutline.vue";
import PaperclipIcon from "vue-material-design-icons/Paperclip.vue";
import SendIcon from "vue-material-design-icons/Send.vue";
import { useUserStore } from "../store/user-store";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const userStore = useUserStore();
const message = ref("");
const { userDataForChat } = storeToRefs(userStore);

const sendMessage = async () => {
  await userStore.sendMessage({
    message: message.value,
    sub2: userDataForChat.value[0].sub2,
    chatId: userDataForChat.value[0].id,
  });
};
</script>

<template>
  <div class="ml-[420px] w-full">
    <div id="BG"></div>
    <div class="w-full">
      <div class="border-l border-green-500">
        <div
          class="bg-[#F0F0F0] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2"
        >
          <div class="flex items-center">
            <img
              class="rounded-full mx-1 w-10"
              src="https://via.placeholder.com/100"
              alt=""
            />
            <div class="text-gray-900 ml-1 font-semibold">Frank</div>
          </div>
          <DotsVerticalIcon fillColor="#515151" class="cursor-pointer" />
        </div>
      </div>

      <div
        id="MessagesSection"
        class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto"
      >
        <div class="px-20 text-sm">
          <div class="flex w-[calc(100%-50px)]">
            <div class="inline-block bg-white p-2 rounded-md my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quibusdam alias minima mollitia neque perferendis. Tempora
              incidunt rerum nobis itaque, sint sunt aut velit sed asperiores,
              veritatis, impedit iste.
            </div>
          </div>

          <div
            class="flex justify-end space-x-1 w-[calc(100%-50px)] float-right"
          >
            <div class="inline-block bg-green-200 p-2 rounded-md my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quibusdam alias minima mollitia neque perferendis. Tempora
              incidunt rerum nobis itaque, sint sunt aut velit sed asperiores,
              veritatis, impedit iste.
            </div>
          </div>
        </div>
      </div>

      <div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#F0F0F0] fixed bottom-0">
        <div class="flex items-center justify-center">
          <EmoticonExcitedOutlineIcon
            :size="27"
            fillColor="#515151"
            class="mx-1.5"
          />
          <PaperclipIcon :size="27" fillColor="#515151" class="mx-1.5 mr-3" />
          <input
            v-model="message"
            class="mr-1 shadow appearance-none w-full rounded-lg bg-[#F0F0F0] py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autocomplete="off"
            placeholder="Message"
            type="text"
          />

          <button @click="sendMessage" class="ml-3 p-2 w-12 flex items-center justify-center">
            <SendIcon fillColor="#515151" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#BG {
  background: url("message-bg.png") no-repeat center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -2;
}
</style>
