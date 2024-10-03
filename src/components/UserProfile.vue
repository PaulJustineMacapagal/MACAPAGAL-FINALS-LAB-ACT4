<template>
  <div class="user-profile">
    <img :src="profilePicture" alt="Profile Picture" class="profile-image" />
    <h2>{{ name }}</h2>
    <p class="title">{{ title }}</p>
    <p class="contact">{{ email }} | {{ phone }}</p>
    <p class="summary">{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      profilePicture: '/images/profile-pic.jpg',
      name: 'Paul Justine Macapagal',
      title: 'Front-End Developer',
      email: 'pmmacapagal1@student.hau.edu.ph',
      phone: '09543059646',
      summary: 'Front-end Web Developer with experience in building responsive web applications using Vue.js and modern JavaScript frameworks.'
    };
  }
};
</script>

<style scoped>
.user-profile {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #445E93; 
  border-radius: 8px;
  background-color: #FCECC9; 
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.user-profile h2 {
  font-size: 2em;
  margin: 0;
  color: #445E93; 
}

.user-profile .title {
  font-size: 1.2em;
  color: #F93943; 
  margin: 5px 0;
}

.user-profile .contact {
  font-size: 0.9em;
  color: #7EB2DD; 
  margin: 10px 0;
}

.user-profile .summary {
  font-size: 1em;
  color: #445E93; 
  margin-top: 10px;
}
</style>
