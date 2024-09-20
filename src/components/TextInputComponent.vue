<!-- TextInputComponent.vue -->
<template>
  <el-input
    type="text"
    v-model="input"
    style="width: 240px; height: 24px"
    placeholder="İsim Soyisim..."
  />
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const input = ref("");

const emit = defineEmits(["textInputChangeHandler"]);
watch(input, (value) => {
  emit("textInputChangeHandler", value);
});
</script>
