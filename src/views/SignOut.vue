<template><div></div></template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  async created() {
    await firebase.auth().signOut();
  }
};
</script>

<style></style>
