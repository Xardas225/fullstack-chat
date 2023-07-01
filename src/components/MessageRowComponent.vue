<script setup>
import CheckAllIcon from "vue-material-design-icons/CheckAll.vue";
</script>

<template>
  <div>
    <div class="flex w-full px-4 py-3 items-center cursor-pointer">
      <img
        class="rounded-full mr-4 w-10"
        src="https://via.placeholder.com/100"
        alt=""
      />

      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">Frank</div>
          <div class="text-[12px] text-gray-600">Date</div>
        </div>

        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1" />
          <div class="w-full flex items-center text-[15px] text-gray-600">
            This is a message
          </div>
        </div>
      </div>
    </div>
    <div class="border-b w-[calc(100%-80px)] float-right"></div>
  </div>
</template>
