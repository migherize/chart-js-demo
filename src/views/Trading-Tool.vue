<template>
  <label class="text-reader">
    Read File
    <input type="file" @change="loadTextFromFile">
  </label>
  <br>
    {{text}}
</template>

<script>
export default {
    data: () => ({ text: "" }),
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.$emit("load", e.target.result);
      reader.onload = e => console.log(e.target.result);
      reader.addEventListener('load', () => { 
          const data = reader.result 
          const row = data.split(/\r?\n|\r/);
          //this.text = row[0].split(',');
          this.text = row;
        })
      reader.readAsText(file);
    }
  }
};
</script>

<style>
.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  /* Fancy button style 😎 */
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
