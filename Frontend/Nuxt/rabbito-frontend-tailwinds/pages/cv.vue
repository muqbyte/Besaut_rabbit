<template>
    <div class="bg-dark rounded-lg" style="height:320px !important; opacity:0.8;">
        <v-card class="custom-card-outline">
            <v-card-title class="text-center"><h2>{{ fullName }}</h2></v-card-title>
            <v-card-text class="flex items-center justify-between">
              <div class="image-container">
                <img class="profile-image w-40 h-auto rounded-full object-cover" :src="imageSrc" alt="Profile Picture" />
              </div>
              <div class="info-container px-4 py-2 mt-2">
                <v-card-subtitle><h3>{{ title }}</h3></v-card-subtitle>
                <v-card-text>
                  <p><strong>Email:</strong> {{ email }}</p>
                  <p><strong>Phone:</strong> {{ phone }}</p>
                  <p><strong>Address:</strong> {{ address }}</p>
                </v-card-text>
                <v-divider class="my-4"></v-divider>
                <v-card-text>
                  <h3 class="mb-2">Skills</h3>
                  <ul class="list-disc pl-4">
                    <li v-for="skill in skills" :key="skill" class="mb-1">{{ skill }}</li>
                  </ul>
                </v-card-text>
                <v-divider class="my-4"></v-divider>
                <v-card-text>
                  <h3 class="mb-2">Experience</h3>
                  <div v-for="job in jobs" :key="job.company" class="mb-4">
                    <h4>{{ job.company }}</h4>
                    <p>{{ job.position }}</p>
                    <p>{{ job.startDate }} - {{ job.endDate }}</p>
                    <ul class="list-disc pl-4">
                      <li v-for="task in job.tasks" :key="task" class="mb-1">{{ task }}</li>
                    </ul>
                  </div>
                </v-card-text>
                <v-divider class="my-4"></v-divider>
                <v-card-text>
                  <h3 class="mb-2">Education</h3>
                  <div v-for="school in schools" :key="school.degree" class="mb-4">
                    <h4 class="mb-1">{{ school.degree }}</h4>
                    <p>{{ school.schoolName }}</p>
                    <p>{{ school.startDate }} - {{ school.endDate }}</p>
                  </div>
                </v-card-text>
              </div>
            </v-card-text>
          </v-card>
    </div>
  </template>
  <script>
  export default {
    name: 'Resume',
    data() {
      return {
        title: 'Full Stack Developer',
        email: 'tronexia@gmail.com',
        phone: '+6011-6261-2468',
        address: 'SEA-IC Lab, Level 4, Block 2, UiTM Shah Alam, 40450 Selangor',
        skills: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Git'],
        jobs: [
          {
            company: 'Eagle Attech Sdn. Bhd',
            position: 'Chief Technical Officer',
            startDate: 'May 2021',
            endDate: 'Present',
            tasks: ['Supervised end-to-end project development lifecycles including planning, technical design, development, testing, and deployment',
                    'Led a team of engineers across software development, hardware design and quality assurance',
                    'Provided strategic direction to align technological roadmaps and capabilities with overall business goals',
                    'Established best practices and processes around developing robust and scalable products reliably',
                    'Collaborated closely with UX designers and product managers to enhance products with new features based on user feedback',
                    'Spearheaded migration to cloud infrastructure which improved system reliability by over 50% while reducing costs',
                    'Developed a comprehensive onboarding program for new hires focusing both on core competencies as well as culture fit']
          },
          {
            company: 'TXIO Corp.',
            position: 'Junior Full Stack Developer',
            startDate: 'June 2017',
            endDate: 'December 2021',
            tasks: ['Assisted with website development projects', 'Debugged and fixed issues with existing websites']
          }
        ],
        schools: [
          {
            degree: 'PhD in Functional Control Systems',
            schoolName: 'Shibaura Institute of Technology',
            startDate: 'November 2013',
            endDate: 'Mar 2017'
          }
        ],
        imageSrc: 'https://raw.githubusercontent.com/hanifr/logos/master/aneh2killa.png',
      }
    },
    computed: {
      fullName() {
        return 'M. Hanif M. R.';
      }
    }
  }
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  
  h2 {
    font-family: Orbitron, sans-serif;
    font-weight: 200;
    font-size: 32px;
  }
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  
  /* Set a fixed width for the profile image */
  .profile-image {
    width: 200px;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* Add some padding to the info container */
  .info-container {
    padding: 5px;
  }
  
  /* Style the skills and education section headings */
  h3 {
    font-family: Chakra Petch, sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  /* Style the job and education section subheadings */
  h4 {
    font-family: Chakra Petch, sans-serif;
    font-size: 16px;
    font-weight: bold;
  }
  
  p {
    font-family: Chakra Petch, sans-serif;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 0; /* Removed the margin */
  }
  /* Style the list items */
  ul {
    list-style-type: disc;
    margin-left: 16px;
  }
  
  /* Set a fixed width for the card */
  .custom-card-outline .v-card {
    border: 2px solid #3d07ff !important;
    width: 800px;
    margin: auto;
  }
  .bg-dark {
    background-image: linear-gradient(360deg, rgba(20, 35, 43, 0.9) 0, rgb(243, 248, 250)  100%);
  }
  </style>
  