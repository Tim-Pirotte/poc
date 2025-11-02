<script setup>
const props = defineProps({
  nodes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <template v-for="(node, i) in nodes" :key="i">
    <h4 v-if="node.type === 'heading'">
      {{ node.content }}
    </h4>
    <p v-else-if="node.type === 'text'">
      {{ node.content }}
    </p>
    <ul v-else-if="node.type === 'list'">
      <li v-for="(li, j) in node.content" :key="j">
        <PlanContent :nodes="[li]" />
      </li>
    </ul>
  </template>
</template>
