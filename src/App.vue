<template>
  <div id="app">
    <h1>Resume</h1>
    <UserProfile />
    <ResumeEducation />
    <ResumeSkills />
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue';
import ResumeEducation from './components/ResumeEducation.vue';
import ResumeSkills from './components/ResumeSkills.vue';

export default {
  components: {
    UserProfile,
    ResumeEducation,
    ResumeSkills
  }
}
</script>

<style>
body {
    font-family: Arial, sans-serif;
  }
  #app {
    max-width: 800px;
    margin: auto;
  }
  h1 {
    text-align: center;
    margin-top: 20px;
    font-size: 3em;
  }
</style>
