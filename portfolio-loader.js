class PortfolioLoader {
    constructor() {
        this.data = null;
    }

    async loadData() {
        try {
            const response = await fetch('portfolio-data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error('Error loading portfolio data:', error);
            return null;
        }
    }

    renderExperiences() {
        const container = document.querySelector('#experience .section-content');
        if (!container || !this.data?.experiences) {
            console.error('Experience container or data not found');
            return;
        }

        container.innerHTML = '<p style="color: #94a3b8;">🔍 Loading experiences...</p>';

        const experiencesHTML = this.data.experiences.map(exp => `
            <div class="experience-item">
                <div class="experience-header">
                    <div class="experience-period">${exp.period}</div>
                    <div class="experience-company">${exp.company}</div>
                </div>
                <div class="experience-details">
                    <h3 class="experience-title">${exp.title}</h3>
                    <p class="experience-description">${exp.description}</p>
                    <div class="experience-skills">
                        ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        container.innerHTML = experiencesHTML;
        console.log(`✅ Loaded ${this.data.experiences.length} experience items`);
    }

    renderProjects() {
        const container = document.querySelector('#projects .section-content');
        if (!container || !this.data?.projects) {
            console.error('Projects container or data not found');
            return;
        }

        container.innerHTML = '<p style="color: #94a3b8;">🔍 Loading projects...</p>';

        const projectsHTML = this.data.projects.map(project => {
            const hasLink = project.link && project.link.trim() !== '';
            const linkAttrs = hasLink ? `href="${project.link}" target="_blank" rel="noopener noreferrer"` : '';
            
            return `
            <div class="project-item">
                ${hasLink ? 
                    `<a ${linkAttrs} class="project-link project-image-link">
                        <div class="project-image-placeholder">
                            <img src="${project.image}" alt="${project.title}" class="project-image" />
                        </div>
                    </a>` :
                    `<div class="project-image-placeholder">
                        <img src="${project.image}" alt="${project.title}" class="project-image" />
                    </div>`
                }
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">
                            ${hasLink ? 
                                `<a ${linkAttrs} class="project-link">${project.title}</a>` :
                                project.title
                            }
                        </h3>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-skills">
                        ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = projectsHTML;
        console.log(`✅ Loaded ${this.data.projects.length} project items`);
    }

    async init() {
        try {
            await this.loadData();
            if (this.data) {
                this.renderExperiences();
                this.renderProjects();
            } else {
                this.showError();
            }
        } catch (error) {
            console.error('Error during portfolio initialization:', error);
            this.showError();
        }
    }

    showError() {
        const containers = [
            document.querySelector('#experience .section-content'),
            document.querySelector('#projects .section-content')
        ];

        containers.forEach(container => {
            if (container) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #64748b;">
                        <p>Content loading failed. Please refresh the page.</p>
                    </div>
                `;
            }
        });
    }

    // Helper method to add new data (for future use)
    addExperience(experience) {
        if (this.data && this.data.experiences) {
            this.data.experiences.push(experience);
            this.renderExperiences();
        }
    }

    addProject(project) {
        if (this.data && this.data.projects) {
            this.data.projects.push(project);
            this.renderProjects();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const loader = new PortfolioLoader();
    loader.init();
});

// Export for potential future use
window.PortfolioLoader = PortfolioLoader;