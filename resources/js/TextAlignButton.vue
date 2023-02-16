<!--
  - /**
  -  *  * Copyright (C) optimoapps.com - All Rights Reserved
  -  *  * Unauthorized copying of this file, via any medium is strictly prohibited
  -  *  * Proprietary and confidential
  -  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>, ManiKandan<smanikandanit@gmail.com >
  -  *
  -  */
  -->

<template>
  <div class="inline-block relative">
    <button
      class="bard-toolbar-button"
      :class="{
        active: attributeAlignment === this.button.args.align,
      }"
      v-html="button.html"
      v-tooltip="button.text"
      @click="setAlignment()"
    />
  </div>
</template>
<script>
export default {
  mixins: [BardToolbarButton],
  computed: {
    attributeAlignment() {
      return this.editor.getAttributes('textAlign').align;
    }
  },
  methods: {
    setAlignment() {
      this.editor.commands.textAlign({ align: this.button.args.align });
    },
  },
};
</script>
