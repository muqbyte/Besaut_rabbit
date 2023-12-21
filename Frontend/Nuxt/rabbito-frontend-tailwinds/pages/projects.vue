<template>
    <div class="fyptitle">
      <v-card class="title-card" elevation="4">
        <v-card-text>
          <h1 class="main-title">{{ title }}</h1>
          <p class="author">{{ author }}</p>
        </v-card-text>
      </v-card>
  
      <v-card v-for="section in sections" :key="section.title" class="section-card" elevation="2">
        <v-card-title>
          <h2 class="section-title">{{ section.title }}</h2>
        </v-card-title>
        <v-card-text>
          <ul>
            <li v-for="item in section.items" :key="item" class="section-item">{{ item }}</li>
          </ul>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'FypTitle',
      layout: 'blog',
    data() {
      return {
        title: 'Functional Control Systems Laboratory: FYP Themes (Year 2023-2024)',
        author: 'M.H.M.Ramli',
        sections: [
          {
            title: 'TITLES',
            items: [
              'CONTROL THEORY AND DESIGN: IMPLEMENTATION OF THE PRESCRIBED PERFORMANCE CONTROLLER (PPC) BASED ON PID SCHEME ON A MULTIROTORS SYSTEM',
              'DEVELOPMENT OF AN EXO-SKELETON SUIT FOR POST STOKE PATIENT: A LOWER LIMB EXO-SUIT.',
              'DEVELOPMENT OF A MONITORING SYSTEM FOR A SOLAR OFF-GRID ENERGY GENERATION SYSTEM.',
              'DESIGN AND PROTOTYPING OF HIGH POWER LI-ION BATTERY FOR AERIAL DRONES.',
              'EXPLORATION OF OPENCV LIBRARY PACKAGE IN VISION AND IMAGE PROCESSING.',
              'AUTONOMOUS NAVIGATION USING LIGHT DETECTION AND RANGING SENSOR (LiDAR).',
              'HEAVY AERIAL LIFT DRONE: TOWARDS FULL-SCALE AUTONOMOUS FLYING TAXI (GRABCAR) A FEASIBILITY STUDY.',
              'SMART TRACKING / LOGISTIC SYSTEM: WEARABLE BRACELET FOR JEMAAH HAJI.',
              'DEVELOPMENT OF A DATA ACQUISITION MODULE FOR A VEHICLE\'S ELECTRONIC CONTROL UNIT (ECU).',
            ],
          },
          {
            title: 'FYP in a Glance: WHAT IS YOUR SV EXPECT',
            items: [
              'FYP 1:',
              'Preparation of Proposal: 1.5 Months. The typical items in the proposal are as follow:',
              '(a). Justify the direction to engage.',
              '(b). Formulation of problem statement to justify the rationale of (a).',
              '(c). Suggest the method of solution for (b).',
              '(d). How/ What are the process to cater for (c) (methodology).',
              '(e). Expected results / outcomes using (d).',
              '(f). The contents should not exceed 30 pages.',
              'Understanding of the technical concepts which are required for problem-solving in order to achieve the set objective/s: throughout the FYP1 and FYP 2.',
              'Expected results:',
              '1- Theoretical understandings, i.e., equations, relations, principles to be used for solving the above-mentioned problems. ',
              '2- Planning skills on how to achieve the objective/s.',
              'Test-Rig Establishment: ',
              '1- Must be clear and partially done in this period (FYP 1).',
              '2- Do not wait until FYP 2 to set up the test-rig. What is test-rig then? It is a platform to test your method, algorithm, approaches such that the set objective is achieved. It can be a simulation model, a prototype, a software and etc.',
              'FYP 2:',
              'To focus on analysis using the above established test-rig.',
              'Fine-tuning, trouble-shooting for refining the proposed method.',
              'Writing the thesis (minimum 20 pages, maximum 70 pages) using the provided template (Latex:-you need to learn how to use latex programming software-Texstudio, texlive).',
              'Plan your works, tasks, appropriately.',
            ],
          },
          {
            title: 'List of Equipment/Hardware',
            items: [
              'UAV Systems:',
              '1. Drones platforms: 3x 250mm quad-rotors, 2x micro quad-rotors, 1x DJI Mavic professional drone (under closed supervision), 1x 650mm quadrotors, 3x Delta wings (840mm, 950mm,1200mm), 1x Cessna airplane(2000m), 1x FPV glider.',
              '2. Embedded Hardware: 5x Flight controller (1x Omnibus F7 V2, 1x Omnibus F4 V3, 1x Naze32 F1 V6, 1x Pixhawk V1, 1x APM 2.6)',
              '3. Power Systems: 7x Lipoly Batteries, 4x Lithium High Discharge Batteries (30A), 3x Lipoly Balance Chargers, 2x standard battery charger.',
              '4. Vision Systems: 1x FPV monitor dual antenna, 1x video goggles, 3x video transmitter modules.',
              '5. Propulsion Systems: 5 units brushless motors (890KV), 10 units ESC (ranging 25A -120A), Propeller sets (various sizes: 5 inches - 11 inches)',
              'Controller Boards:',
              '1. Arduino: 2x Uno, 3x ESP8266, 1x DUE, 1x Prototyping module.',
              '2. Raspberry Pi: Pi 3, Pi zero W.',
              '3. Controlino PLC.',
              'Camera Modules:',
              '1. Cameras: Pi 5MP, Pi 8MP, 2x ArduCAM, Kinect XBOX 360 depth Image sensor, Wireless SQ13 Camera.',
              'Telematics:',
              '1. Modules: XBEE Pro, Radio 433MHz, 916MHz, Bluetooth BLE, NRF.',
              '2. 3x 2.GHz Radio Transmitters (2x Futaba, 1x Walkera Devention).',
              '3D Printer: 300mm X 300mm X 300mm printing capacity.',
            ],
          },
        ],
      };
    },
  };
  </script>
<!--   
  <style scoped>
  /* Add your styles here */
  
  /* Set the three main colors for the layout */
  :root {
    --main-color-1: #337b94; /* Turquoise */
    --main-color-2: #abe7f4; /* Pale Blue */
    --main-color-3: #273136; /* Dark Gray */
  }
  
  .fyptitle {
    background-color: var(--main-color-1);
    color: white;
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--main-color-3);
  }
  
  ul {
    margin-left: 20px;
    list-style-type: disc;
  }
  
  li {
    font-size: 16px;
    margin-bottom: 10px;
    color: var(--main-color-3);
  }
  
  </style> -->

  <style scoped>
/* Add your styles here */

/* Set the three main colors for the layout */
:root {
  --main-color-1: #337b94; /* Turquoise */
  --main-color-2: #abe7f4; /* Pale Blue */
  --main-color-3: #273136; /* Dark Gray */
}

.fyptitle {
  background-color: var(--main-color-1);
  padding: 20px;
}
.title-card {
    background-color: #abe7f4;
    opacity: 0.7;
    padding: 5px;
}

.main-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(19, 71, 114);
}

.author {
  font-size: 16px;
  color: rgb(42, 5, 87);
  margin-bottom: 20px;
}

.section-card {
  background-color: #abe7f4;
  opacity: 0.7;
  margin-top: 20px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--main-color-3);
}

ul {
  margin-left: 20px;
  list-style-type: disc;
}

.section-item {
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--main-color-3);
}
</style>