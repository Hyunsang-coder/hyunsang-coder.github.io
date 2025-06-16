// 포트폴리오 데이터 - 이 파일만 수정하면 웹사이트 전체 업데이트
const portfolioData = {
  // 기본 정보
  profile: {
    name: "Hyunsang Joo",
    title: "Translator & Vibe Coder",
    tagline: "I craft seamless digital experiences while bridging language barriers in the gaming industry.",
    email: "hyunsang.joo@example.com",
    github: "https://github.com/hyunsangjoo",
    linkedin: "https://linkedin.com/in/hyunsangjoo"
  },

  // About 섹션
  about: [
    "I'm a translator and developer passionate about creating intuitive digital experiences while bridging language barriers in the gaming industry. My work lies at the intersection of linguistics and technology, crafting applications that not only function flawlessly but also communicate effectively across cultures.",
    
    "Currently, I'm a Translator at PUBG Studios, where I localize game content and collaborate with international teams to ensure authentic gaming experiences for global audiences. I specialize in Korean-English translation while maintaining the cultural nuances that make games truly immersive.",
    
    "In my spare time, I develop mobile and desktop applications using Unity, Python, and Flutter. I enjoy exploring the latest technologies and building tools that solve real-world problems.",
    
    "When I'm not coding or translating, you can find me playing the latest indie games, learning new programming languages, or exploring Seoul's vibrant tech scene."
  ],

  // 경험 섹션
  experiences: [
    {
      period: "2022 — Present",
      company: "PUBG Studios",
      position: "Translator & Localization Specialist",
      description: "Translate and localize game content from Korean to English and vice versa. Collaborate with development teams to ensure cultural authenticity and maintain consistent terminology across all game assets. Work closely with international QA teams to identify and resolve localization issues.",
      skills: ["Korean-English Translation", "Game Localization", "Cultural Adaptation", "QA Collaboration"]
    },
    {
      period: "2020 — 2022",
      company: "Freelance",
      position: "Full-Stack Developer & Translator",
      description: "Developed mobile applications and web services for various clients while providing translation services for tech startups. Created cross-platform solutions using modern frameworks and helped international companies establish their presence in the Korean market.",
      skills: ["Flutter", "Python", "Unity", "React", "Firebase"]
    },
    {
      period: "2018 — 2020",
      company: "TechTranslate Co.",
      position: "Technical Translator",
      description: "Specialized in translating technical documentation, software interfaces, and API documentation for various tech companies. Maintained translation memory databases and developed internal tools to improve translation efficiency.",
      skills: ["Technical Writing", "API Documentation", "CAT Tools", "Automation Scripts"]
    }
  ],

  // 프로젝트 섹션
  projects: [
    {
      title: "GameTranslate Pro",
      description: "A Unity plugin that automates the translation workflow for game developers. Features include real-time translation API integration, context-aware suggestions, and collaborative review tools for translation teams.",
      skills: ["Unity", "C#", "Google Translate API", "SQLite"],
      link: "#",
      image: "images/gametranslate-pro.jpg"
    },
    {
      title: "KoreanMate Mobile",
      description: "Cross-platform mobile app for Korean language learners featuring interactive lessons, pronunciation practice, and cultural context explanations. Built with Flutter and integrated with speech recognition APIs.",
      skills: ["Flutter", "Dart", "Firebase", "Speech-to-Text API"],
      link: "#",
      image: "images/koreanmate-mobile.jpg"
    },
    {
      title: "Translation Memory Tool",
      description: "Python-based desktop application that helps translators manage large translation projects. Features include fuzzy matching, terminology management, and integration with popular CAT tools.",
      skills: ["Python", "PyQt6", "PostgreSQL", "NLP Libraries"],
      link: "#",
      image: "images/translation-memory-tool.jpg"
    },
    {
      title: "PUBG Stats Dashboard",
      description: "Personal project analyzing PUBG gameplay statistics with interactive visualizations. Built to explore game balance and player behavior patterns using the official PUBG API.",
      skills: ["Python", "Pandas", "Plotly", "PUBG API"],
      link: "#",
      image: "images/pubg-stats-dashboard.jpg"
    }
  ]
};

// 페이지 렌더링 함수들
function renderProfile() {
  const { profile } = portfolioData;
  
  document.querySelector('.intro-section h1').textContent = profile.name;
  document.querySelector('.intro-section h2').textContent = profile.title;
  document.querySelector('.intro-section p').textContent = profile.tagline;
  
  // 소셜 링크 업데이트
  document.querySelector('a[aria-label="GitHub"]').href = profile.github;
  document.querySelector('a[aria-label="LinkedIn"]').href = profile.linkedin;
  document.querySelector('a[aria-label="Email"]').href = `mailto:${profile.email}`;
}

function renderAbout() {
  const aboutSection = document.querySelector('#about .section-content');
  aboutSection.innerHTML = '';
  
  portfolioData.about.forEach(paragraph => {
    const p = document.createElement('p');
    // 링크와 하이라이트 처리
    p.innerHTML = paragraph
      .replace(/PUBG Studios/g, '<a href="#" class="link">PUBG Studios</a>')
      .replace(/Unity|Python|Flutter/g, '<span class="highlight">$&</span>');
    aboutSection.appendChild(p);
  });
}

function renderExperiences() {
  const experienceSection = document.querySelector('#experience .section-content');
  experienceSection.innerHTML = '';
  
  portfolioData.experiences.forEach(exp => {
    const expDiv = document.createElement('div');
    expDiv.className = 'experience-item';
    
    expDiv.innerHTML = `
      <div class="experience-header">
        <div class="experience-period">${exp.period}</div>
        <div class="experience-company">${exp.company}</div>
      </div>
      <div class="experience-details">
        <h3 class="experience-title">${exp.position}</h3>
        <p class="experience-description">${exp.description}</p>
        <div class="experience-skills">
          ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `;
    
    experienceSection.appendChild(expDiv);
  });
}

function renderProjects() {
  const projectSection = document.querySelector('#projects .section-content');
  projectSection.innerHTML = '';
  
  portfolioData.projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    
    projectDiv.innerHTML = `
      <div class="project-image-placeholder">Image</div>
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">
            <a href="${project.link}" class="project-link">${project.title}</a>
          </h3>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-skills">
          ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `;
    
    projectSection.appendChild(projectDiv);
  });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  renderProfile();
  renderAbout();
  renderExperiences();
  renderProjects();
});

// 내비게이션 활성화 (선택사항)
function updateNavigation() {
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });
}

// 내비게이션 활성화 초기화
updateNavigation();