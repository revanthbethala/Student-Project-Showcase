const projects = [
  {
    name: "IoT-Based Smart Home System",
    description: "A system that automates appliances using IoT devices.",
    features: [
      "Remote control of appliances via a mobile app",
      "Energy usage tracking and optimization",
      "Integration with voice assistants like Alexa and Google Assistant",
    ],
    techStack: ["Arduino", "NodeMCU", "MQTT", "Firebase"],
    timeline: "6 months",
    image: "./images/home.png",
    link: "https://github.com/al-one/hass-xiaomi-miot",
  },
  {
    name: "Autonomous Line-Following Robot",
    description: "A robot capable of navigating paths using sensors.",
    features: [
      "Infrared sensors for line detection",
      "Obstacle detection and avoidance",
      "Real-time navigation feedback",
    ],
    techStack: ["Arduino", "IR Sensors", "C++", "DC Motors"],
    timeline: "3 months",
    image: "./images/robot.webp",
    link: "https://github.com/autonomous-robots",
  },
  {
    name: "Wireless Communication System",
    description: "A system enabling secure wireless data transmission.",
    features: [
      "Implementation of RF modules for communication",
      "Error detection and correction",
      "Low power consumption design",
    ],
    techStack: ["RF Modules", "MATLAB", "Python"],
    timeline: "5 months",
    image: "./images/wifi.webp",
    link: "https://github.com/JiaoXianjun/BTLE",
  },
  {
    name: "Smart Traffic Light Control System",
    description: "A system using sensors and ML to optimize traffic flow.",
    features: [
      "Vehicle density detection using cameras",
      "Real-time traffic analysis",
      "Dynamic signal adjustment",
    ],
    techStack: ["OpenCV", "Python", "Flask"],
    timeline: "4 months",
    image: "./images/traffic.webp",
    link: "https://github.com/salamzantout/Smart-Traffic-Light",
  },
  {
    name: "Wearable Health Monitoring Device",
    description: "A wearable device tracking health metrics.",
    features: [
      "Real-time health monitoring",
      "Data synchronization with a mobile app",
      "Alert system for abnormal readings",
    ],
    techStack: ["Arduino", "Heart Rate Sensor", "Bluetooth Module"],
    timeline: "6 months",
    image: "./images/watch.webp",
    link: "https://github.com/roshaans/health-monitor",
  },
  {
    name: "FPGA-Based Digital Signal Processor",
    description: "A  signal processing system for real-time operations.",
    features: [
      "Custom digital filter design",
      "Real-time audio signal processing",
      "Energy-efficient implementation",
    ],
    techStack: ["Verilog", "MATLAB", "VHDL"],
    timeline: "5 months",
    image: "./images/fpga.webp",
    link: "https://github.com/cruxopen/openISP",
  },
  {
    name: "Gesture-Controlled Drone",
    description: "A drone controlled by hand gestures using sensors .",
    features: [
      "Gesture recognition using accelerometer and gyroscope",
      "Real-time flight stabilization",
      "Wireless communication for control",
    ],
    techStack: ["Arduino", "IMU Sensors", "Python", "Bluetooth"],
    timeline: "6 months",
    image: "./images/drone.webp",
    link: "https://github.com/szebedy/autonomous-drone",
  },
  {
    name: "Energy Harvesting from Piezoelectric Sensors",
    description: "A system generates electricity from vibrations.",
    features: [
      "Piezoelectric sensor integration",
      "Energy storage and management",
      "Powering small IoT devices",
    ],
    techStack: ["Piezoelectric Sensors", "MATLAB", "Python"],
    timeline: "5 months",
    image: "./images/sensors.webp",
    link: "https://github.com/lab11/monjolo",
  },
  {
    name: "RFID-Based Attendance System",
    description: "An automated attendance system using readers.",
    features: [
      "Real-time attendance logging",
      "Integration with a database",
      "Generation of attendance reports",
    ],
    techStack: ["RFID Modules", "MySQL", "Express JS", "Bootstrap"],
    timeline: "3 months",
    image: "./images/attendance.webp",
    link: "https://github.com/dev-mhrony/Student-Attendance-System01",
  },
];

const carouselContainer = document.getElementById("carouselContainer");

for (let i = 2; i < projects.length; i++) {
  const slide = document.createElement("div");
  slide.classList.add("carousel-slide");
  slide.innerHTML = `
  <img src="${projects[i].image}" alt="${projects[i].name}">
      <div class="details">
        <h3>${projects[i].name}</h3>
      </div>`;
  carouselContainer.appendChild(slide);
}

// Reference to the search input field
const searchInput = document.getElementById("searchInput");
const techStackFilter = document.getElementById("techStackFilter");
const timelineFilter = document.getElementById("timelineFilter");
const projectCards = document.getElementById("projectCards");

// Function to render projects based on search term and selected filters
function renderProjects(
  searchTerm = "",
  selectedTechStack = "",
  selectedTimeline = ""
) {
  projectCards.innerHTML = ""; // Clear existing project cards

  // Filter the projects based on search term, tech stack, and timeline
  const filteredProjects = projects.filter((project) => {
    const matchesSearchTerm =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTechStack = selectedTechStack
      ? project.techStack.includes(selectedTechStack)
      : true;
    const matchesTimeline = selectedTimeline
      ? project.timeline === selectedTimeline
      : true;

    return matchesSearchTerm && matchesTechStack && matchesTimeline;
  });

  // Loop through filtered projects and add them to the page
  filteredProjects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <ul>
        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <p><strong>Tech Stack:</strong> ${project.techStack.join(", ")}</p>
      <p><strong>Timeline:</strong> ${project.timeline}</p>
      <a href="${
        project.link
      }" class="project-link" target="_blank">View Project</a>
    `;
    projectCards.appendChild(card);
  });
}

// Event listener for search input
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim();
  const selectedTechStack = techStackFilter.value;
  const selectedTimeline = timelineFilter.value;
  renderProjects(searchTerm, selectedTechStack, selectedTimeline);
});

// Event listeners for filter dropdowns
techStackFilter.addEventListener("change", () => {
  const searchTerm = searchInput.value.trim();
  const selectedTechStack = techStackFilter.value;
  const selectedTimeline = timelineFilter.value;
  renderProjects(searchTerm, selectedTechStack, selectedTimeline);
});

timelineFilter.addEventListener("change", () => {
  const searchTerm = searchInput.value.trim();
  const selectedTechStack = techStackFilter.value;
  const selectedTimeline = timelineFilter.value;
  renderProjects(searchTerm, selectedTechStack, selectedTimeline);
});

// Function to render the filter options dynamically based on unique tech stacks and timelines
function renderFilters() {
  const techStackOptions = new Set();
  const timelineOptions = new Set();

  // Loop through the projects to collect unique tech stacks and timelines
  projects.forEach((project) => {
    project.techStack.forEach((tech) => techStackOptions.add(tech));
    timelineOptions.add(project.timeline);
  });

  // Populate tech stack filter dropdown
  techStackOptions.forEach((tech) => {
    const option = document.createElement("option");
    option.value = tech;
    option.textContent = tech;
    techStackFilter.appendChild(option);
  });

  // Populate timeline filter dropdown
  timelineOptions.forEach((timeline) => {
    const option = document.createElement("option");
    option.value = timeline;
    option.textContent = timeline;
    timelineFilter.appendChild(option);
  });
}

// Initial render of filters and projects
renderFilters();
renderProjects();
