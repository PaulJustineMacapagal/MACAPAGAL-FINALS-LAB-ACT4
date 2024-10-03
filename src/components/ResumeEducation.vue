<template>
  <div class="resume-education">
    <h2>Education</h2>
    <div v-for="edu in education" :key="edu.id" class="education-item">
      <h3>{{ edu.degree }}</h3>
      <p class="institution">{{ edu.institution }}</p>
      <p class="date">{{ edu.date }}</p>
      <p class="details">{{ edu.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeEducation',
  data() {
    return {
      education: [
        {
          id: 1,
          degree: 'Bachelor of Science in Information Technology Major in Website Development',
          institution: 'Holy Angel University',
          date: '2022 - 2026',
          details: 'Relevant coursework: Data Structures, Web Development, Graphic Designing'
        },
        {
          id: 2,
          degree: 'High School Diploma',
          institution: 'Holy Angel UNiversity',
          date: '2015 - 2019',
          details: 'Graduated with honors'
        }
      ]
    };
  }
};
</script>

<style scoped>
.resume-education {
  margin: 20px;
  padding: 20px;
  border: 1px solid #445E93; 
  border-radius: 8px;
  background-color: #FCECC9; 
}

.resume-education h2 {
  font-size: 1.8em;
  color: #F93943; 
  margin-bottom: 15px;
}

.education-item {
  margin-bottom: 15px;
}

.education-item h3 {
  font-size: 1.4em;
  color: #445E93; 
  margin: 5px 0;
}

.education-item .institution {
  font-size: 1em;
  color: #7EB2DD; 
}

.education-item .date {
  font-size: 0.9em;
  color: #888;
}

.education-item .details {
  font-size: 0.9em;
  color: #445E93; 
}
</style>
