<template>
  <div class="header">
    <span style="color:white;">
      {{msg}}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped>
.header
{
  width: 100%;
  height: 200px;
  background-color:red;
}
</style>