<template>
  <div class="resume-skills">
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeSkills',
  data() {
    return {
      skills: [
        'Vue.js',
        'JavaScript',
        'HTML & CSS',
        'Responsive Design',
        'Git & GitHub',
        'UI/UX Design'
      ]
    };
  }
};
</script>

<style scoped>
.resume-skills {
  margin: 20px;
  padding: 20px;
  border: 1px solid #445E93; 
  border-radius: 8px;
  background-color: #FCECC9; 
}

.resume-skills h2 {
  font-size: 1.8em;
  color: #F93943; 
  margin-bottom: 15px;
}

.resume-skills ul {
  list-style-type: none;
  padding: 0;
}

.resume-skills li {
  font-size: 1em;
  color: #444;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff; 
  transition: background-color 0.3s;
}

.resume-skills li:hover {
  background-color: #7EB2DD; 
  color: #fff; 
}
</style>
