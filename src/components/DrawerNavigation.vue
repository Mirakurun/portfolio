<template>
  <q-item clickable @click="scroll">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { scrollToElement } from 'utils/scroll';

export default {
  name: 'DrawerNavigation',
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    scroll() {
      this.$emit('hide', this.id);
    },
    scrollToElement,
  },
};
</script>
