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
      this.navigation.className += ' active';
      this.mobileButton.className += ' inactive';
      this.closeButton.className += ' active';
      document.body.style.overflow = 'visible';
      this.isMenuOpen = true;
      this.closeMobileMenu.className += ' inactive';
    }
  },

  closeMobileMenu() {
    if (this.isMenuOpen) {
      this.navigation.className = this.navigation.className.replace(' active', '');
      this.mobileButton.className = this.mobileButton.className.replace(' inactive', '');
      this.closeButton.className = this.closeButton.className.replace(' active', '');
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
//popupwindow

const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1-live',
    sourceLink: 'https://github.com/example/project1',
  },
  
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
  const popup = document.querySelector('.modal-pop');
  const closeButton = popup.querySelector('.close-button');
  const modalContent = popup.querySelector('.modal-content');

  // Clear the previous content
  modalContent.innerHTML = '';

  // Set the popup content
  const title = document.createElement('h2');
  title.textContent = project.name;
  modalContent.appendChild(title);

  const description = document.createElement('p');
  description.textContent = project.description;
  modalContent.appendChild(description);

  const technologies = document.createElement('div');
  technologies.classList.add('technologies');
  const technologiesList = document.createElement('ul');
  project.technologies.forEach((technology) => {
    const technologyItem = document.createElement('li');
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  });
  technologies.appendChild(technologiesList);
  modalContent.appendChild(technologies);

  const liveLink = document.createElement('a');
  liveLink.href = project.liveLink;
  liveLink.textContent = 'Live Version';
  modalContent.appendChild(liveLink);

  const sourceLink = document.createElement('a');
  sourceLink.href = project.sourceLink;
  sourceLink.textContent = 'Source Code';
  modalContent.appendChild(sourceLink);

  // Show the popup window
  popup.style.display = 'flex';

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

