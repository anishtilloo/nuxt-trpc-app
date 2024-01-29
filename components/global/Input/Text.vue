<template>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">{{ props.label }}</span>
        <span v-show="mandatory" class="text-red-600 inline">*</span>
      </label>
      <input
        class="input input-bordered w-full"
        v-bind="$attrs"
        :name="name"
        :value="placeHolderForInputValue"
        @input="handleInput"
        @blur="handleInput"
      />
      <span v-if="errors && errors[props.name]" class="label">
        <span class="label-text-alt text-error">{{ errors[props.name] }}</span>
      </span>
    </div>
</template>
  
<script setup lang="ts">
  const props = defineProps<{
    label: string;
    name: string;
    mandatory: boolean,
    errors?: Record<string, string | undefined>;
    inputValue?: string | number | undefined;
  }>();
  
  // Internal Variable
  const placeHolderForInputValue = ref<string | number>();
  
  watchEffect(() => {
    if (props.inputValue) {
        placeHolderForInputValue.value = props.inputValue;
    }
  });
  
  const emits = defineEmits<{
    (eventName: 'update:inputValue', value: string | number | undefined): void;
  }>();
  
  function handleInput(event: Event) {
    const element = (event.target as HTMLInputElement).value;
    emits('update:inputValue', element);
  }
  </script>
  
  <script lang="ts">
  export default defineComponent({
    inheritAttrs: false,
  });
</script>