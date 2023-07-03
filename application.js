// Menu object
const menu = {
  navigation: document.getElementById('nav-linksid'),
  mobileButton: document.getElementById('mobile-menuid'),
  closeButton: document.getElementById('close-menuid'),
  linkItems: document.querySelectorAll('.poplinkid'),
  isMenuOpen: false,

  toggleMenu() {
    if (this.isMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  },

  openMobileMenu() {
    if (!this.isMenuOpen) {
      this.navigation.classList.add('active');
      this.mobileButton.classList.add('inactive');
      this.closeButton.classList.add('active');
      document.body.style.overflow = 'visible';
      this.isMenuOpen = true;
      this.closeButton.classList.add('inactive');
    }
  },

  closeMobileMenu() {
    if (this.isMenuOpen) {
      this.navigation.classList.remove('active');
      this.mobileButton.classList.remove('inactive');
      this.closeButton.classList.remove('active');
      document.body.style.overflow = 'visible';
      this.isMenuOpen = false;
    }
  },

  initialize() {
    this.mobileButton.addEventListener('click', this.toggleMenu.bind(this));

    this.linkItems.forEach((item) => {
      item.addEventListener('click', this.closeMobileMenu.bind(this));
    });

    this.closeButton.addEventListener('click', this.closeMobileMenu.bind(this));
  },
};

menu.initialize();

//popup window

const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'This is the description of Project 1.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'This is the description of Project 1.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'This is the description of Project 1.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'This is the description of Project 1.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'This is the description of Project 1.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'This is the description of Project 1.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  // Add more projects following the same structure
];

const projectsSection = document.getElementById('portfolio');
const cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards');

projects.forEach((project, index) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('cardimage');
  const image = document.createElement('img');
  image.src = project.image;
  cardImage.appendChild(image);
  card.appendChild(cardImage);

  const more = document.createElement('div');
  more.classList.add('more');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('cardtitle');
  const title = document.createElement('h3');
  title.textContent = project.name;
  cardTitle.appendChild(title);
  more.appendChild(cardTitle);

  const technologies = document.createElement('div');
  technologies.classList.add('technologies');
  const technologiesList = document.createElement('ul');
  project.technologies.forEach((technology) => {
    const technologyItem = document.createElement('li');
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  });
  technologies.appendChild(technologiesList);
  more.appendChild(technologies);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button');
  const button = document.createElement('button');
  button.textContent = 'See project';
  button.addEventListener('click', () => {
    showProjectDetails(index);
  });
  buttonContainer.appendChild(button);
  more.appendChild(buttonContainer);

  card.appendChild(more);
  cardsContainer.appendChild(card);
});

projectsSection.appendChild(cardsContainer);

function showProjectDetails(index) {
  const project = projects[index];

  // Create the popup window elements
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const closeButton = document.createElement('button');
  closeButton.id = 'closeButton';
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(popup);
  });

  const details = document.createElement('div');
  details.classList.add('project-details');

  const title = document.createElement('h2');
  title.textContent = project.name;
  details.appendChild(title);

  const description = document.createElement('p');
  description.textContent = project.description;
  details.appendChild(description);

  const technologies = document.createElement('div');
  technologies.classList.add('technologies');
  const technologiesList = document.createElement('ul');
  project.technologies.forEach((technology) => {
    const technologyItem = document.createElement('li');
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  });
  technologies.appendChild(technologiesList);
  details.appendChild(technologies);

  const liveLink = document.createElement('a');
  liveLink.href = project.liveLink;
  liveLink.textContent = 'Live Version';
  details.appendChild(liveLink);

  const sourceLink = document.createElement('a');
  sourceLink.href = project.sourceLink;
  sourceLink.textContent = 'Source Code';
  details.appendChild(sourceLink);

  popup.appendChild(closeButton);
  popup.appendChild(details);
  document.body.appendChild(popup);
}
