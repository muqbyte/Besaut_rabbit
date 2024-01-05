<template>
    <div class="rounded-lg" style="height:100% !important; opacity:0.8;">
      <v-card class="custom-card-outline">
        <!-- Header Section -->
        <v-card-title class="mt-5 text-center">
          <div class="d-flex align-center justify-center">
            <h2>{{ fullName }}</h2>
            <!-- GitHub Logo and Link -->
            <a :href="links.github" target="_blank" class="logo-link">
              <img class="logo-image" src="https://raw.githubusercontent.com/hanifr/logos/master/github-logo.png" alt="GitHub Logo" />
            </a>
            <!-- ORCID Logo and Link -->
            <a :href="links.orcid" target="_blank" class="logo-link">
              <img class="logo-image" src="https://raw.githubusercontent.com/hanifr/logos/master/orcid-logo.png" alt="ORCID Logo" />
            </a>
            <!-- IEEE Logo and Link -->
            <a :href="links.ieee" target="_blank" class="logo-link">
              <img class="logo-image" src="https://raw.githubusercontent.com/hanifr/logos/master/ieee-logo.png" alt="IEEE Logo" />
            </a>
          </div>
        </v-card-title>
  
        <!-- Body Section -->
        <v-card-text class="flex items-center justify-between">
          <!-- Conditionally show the image on larger screens -->
          <div class="image-container d-none d-sm-block"> <!-- d-sm-block hides on small screens -->
            <a :href="links.github" target="_blank">
              <img class="profile-image w-100 h-auto rounded-full object-cover" :src="imageSrc" alt="Profile Picture" />
            </a>
          </div>
  
          <!-- Information Container -->
          <div class="info-container px-4 py-2 mt-3">
            <!-- Subtitle and Contact Information -->
            <v-card-subtitle><h3>{{ title }}</h3></v-card-subtitle>
            <v-card-text>
              <h4 class="mb-2"><strong>Email:</strong> {{ email }} </h4>
              <h4 class="mb-2"><strong>Phone:</strong> {{ phone }}</h4>
              <h4 class="mb-2"><strong>Address:</strong> {{ address }}</h4>
            </v-card-text>
  
            <!-- Skills Section -->
            <v-card-text>
              <h3>Skills</h3>
              <ul class="list-disc pl-4">
                <li v-for="skill in skills" :key="skill"><h4 class="mb-2">{{ skill }}</h4></li>
              </ul>
            </v-card-text>
  
            <!-- Experience Section -->
            <v-card-text>
              <h3 class="mb-2">Experience</h3>
              <div v-for="job in jobs" :key="job.company" class="mt-2 mb-2">
                <h4>{{ job.company }}</h4>
                <h5 class="mt-2 mb-2">{{ job.position }}</h5>
                <h5 class="mb-2">{{ job.startDate }} - {{ job.endDate }}</h5>
                <ul class="mt-5 mb-5 list-disc pl-4">
                  <li v-for="task in job.tasks" :key="task" class="mb-1"><h5>{{ task }}</h5></li>
                </ul>
              </div>
            </v-card-text>
  
            <!-- Education Section -->
            <v-card-text>
              <h3 class="mb-2">Education</h3>
              <div v-for="school in schools" :key="school.degree" class="mt-2 mb-2">
                <h4 class="mb-1">{{ school.degree }}</h4>
                <h5 class="mb-2">{{ school.schoolName }}</h5>
                <h5 class="mb-2">{{ school.startDate }} - {{ school.endDate }}</h5>
              </div>
            </v-card-text>
  
            <!-- Conditionally show the image on small screens -->
            <div class="image-container d-block d-sm-none"> <!-- d-block shows on small screens -->
              <!-- <a :href="links.github" target="_blank"> -->
                <img class="profile-image w-100 h-auto rounded-full object-cover" :src="imageSrc" alt="Profile Picture" />
              <!-- </a> -->
            </div>
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
        skills: ['Nuxt', 'React', 'MySQL', 'C++', 'Git'],
        jobs: [
          {
            company: 'Eagle Attech Sdn. Bhd',
            position: 'Chief Technical Officer',
            startDate: 'May 2021',
            endDate: 'Present',
            tasks: ['Supervised end-to-end project development lifecycles (devOps)',
                    'Led a team of engineers across software development, hardware design and quality assurance',
                    'Provided strategic direction to align technological roadmaps and capabilities with overall business goals',
                    'Established best practices and processes around developing robust and scalable products reliably',
                    'Collaborated closely with UX designers and product managers to enhance products features based on user feedback',]
          },
          {
            company: 'TXIO Freelancer Ent.',
            position: 'Junior Full Stack Developer',
            startDate: 'June 2017',
            endDate: 'December 2021',
            tasks: ['Assisted with website development projects', 
                    'Debugged and fixed issues with existing websites', 
                    'Spearheaded migration to cloud infrastructure to improve system reliability',]
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
        links: {
            github: 'https://github.com/hanifr',
            orcid: 'https://orcid.org/0000-0002-7705-6876',  
            ieee: 'https://ieeexplore.ieee.org/author/38242309700'
        },
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
    margin-bottom: 8px;
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
    font-family: Orbitron, sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  /* Style the job and education section subheadings */
  h4 {
    font-family: Chakra Petch, sans-serif;
    font-size: 18px;
    font-weight:normal;
  }
  h5 {
    font-family: Chakra Petch, sans-serif;
    font-size: 16px;
    font-weight:normal;
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
  /* Add the corporate theme color */
  .logo-image {
    width: 20px; /* Adjust the size as needed */
    height: 20px; /* Adjust the size as needed */
    margin-left: 10px;
    cursor: pointer;
  }
  /* Additional styling for a stunning profile image */
  .profile-image {
    border: 4px solid #fff; /* White border for contrast */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add a subtle shadow for depth */
  }
  </style>
  