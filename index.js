// Mobile Menu
const navMenus = document.querySelector('.nav-menu');
const openHamburger = document.querySelector('.mobile-menu-icon');
const closeHamburger = document.querySelector('.mobile-menu-close-icon');
const mobileMenuLinks = document.querySelectorAll('.mobile-links');

openHamburger.addEventListener('click', () => {
  navMenus.classList.add('show');
  openHamburger.classList.add('hide');
  closeHamburger.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeHamburger.addEventListener('click', () => {
  navMenus.classList.remove('show');
  openHamburger.classList.remove('hide');
  closeHamburger.classList.remove('show');
  document.body.style.overflow = 'auto';
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenus.classList.remove('show');
    openHamburger.classList.remove('hide');
    closeHamburger.classList.remove('show');
    document.body.style.overflow = 'auto';
  });
});

// Popup Window
const card = document.getElementById('projectCards');

const projectInfos = [
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    image: './images/modal-desktop.svg',
    mobileImage: './images/pop-mobile.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://ngalamac.github.io/Ngala-Portfolio/',
    sourceLink: 'https://github.com/ngalamac/Portfolio-Ngala.git',
  },
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    image: './images/modal-desktop.svg',
    mobileImage: './images/pop-mobile.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://ngalamac.github.io/Ngala-Portfolio/',
    sourceLink: 'https://github.com/ngalamac/Portfolio-Ngala.git',
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    image: './images/modal-desktop.svg',
    mobileImage: './images/pop-mobile.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://ngalamac.github.io/Ngala-Portfolio/',
    sourceLink: 'https://github.com/ngalamac/Portfolio-Ngala.git',
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    image: './images/modal-desktop.svg',
    mobileImage: './images/pop-mobile.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://ngalamac.github.io/Ngala-Portfolio/',
    sourceLink: 'https://github.com/ngalamac/Portfolio-Ngala.git',
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    image: './images/modal-desktop.svg',
    mobileImage: './images/pop-mobile.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://ngalamac.github.io/Ngala-Portfolio/',
    sourceLink: 'https://github.com/ngalamac/Portfolio-Ngala.git',
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    image: './images/modal-desktop.svg',
    mobileImage: './images/pop-mobile.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: 'https://ngalamac.github.io/Ngala-Portfolio/',
    sourceLink: 'https://github.com/ngalamac/Portfolio-Ngala.git',
  },
];

for (let i = 0; i < projectInfos.length; i += 1) {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  let technologiesList = '';
  for (let j = 0; j < projectInfos[i].technologies.length; j += 1) {
    technologiesList += `<li>${projectInfos[i].technologies[j]}</li>`;
  }

  projectCard.innerHTML = `
      <div class="project-card">
        <div class="project-card_image">
          
        </div>
        <div class="project-card_details">
          <h3>${projectInfos[i].title}</h3>
          <div class="stacks">
            <ul>
              ${technologiesList}
            </ul>
          </div>
          <button class="green-button">See project</button>
        </div>
      </div>
  `;

  card.appendChild(projectCard);
}

const poppedUpCard = document.querySelector('.popup-card');
const popUpButton = document.getElementsByClassName('green-button');
const popUpCard = document.createElement('div');

for (let i = 0; i < popUpButton.length; i += 1) {
  popUpButton[i].addEventListener('click', () => {
    poppedUpCard.style.display = 'block';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    let technologies = '';
    for (let j = 0; j < projectInfos[i].technologies.length; j += 1) {
      technologies += `<li>${projectInfos[i].technologies[j]}</li>`;
    }

    popUpCard.innerHTML = `
        <div class="modal-body">
          <img src="./images/Icon.svg" class='close-btn'>
          <img class="modal-image" src="${projectInfos[i].image}" /> 
          <img class="modal-mobile-image" src="${projectInfos[i].mobileImage}" />      
          <div class="modal-desktop">
            <div class="title-button">
              <h2 class="modal-header">${projectInfos[i].title}</h2>
              <div class="modal-buttons">
                <a href="${projectInfos[i].liveLink}" class="modal-button">See live <img src="./images/live-icon.svg"></a>
                <a href="${projectInfos[i].sourceLink}" class="modal-button">See source <img src="./images/github-icon.svg"></a>
              </div>
              </div>
          </div>
          <ul class="technologies-list">
            ${technologies}
          </ul>
          <div class="card-p">
            <p>${projectInfos[i].description}</p>
          </div>
          <div class="mobile-buttons">
            <a href="${projectInfos[i].liveLink}" class="mobile-button">See live<span><img src="./images/live-icon.svg"></span></a>
            <a href="${projectInfos[i].sourceLink}" class="mobile-button">See source<span><img src="./images/github-icon.svg"></span></a>
          </div>
        </div>
        `;
    if (window.matchMedia('(min-width: 364px)').matches) {
      const modalDesktop = popUpCard.querySelector('.modal-desktop');
      modalDesktop.style.display = 'none';
    }
    if (window.matchMedia('(min-width:768px)').matches) {
      const modalDesktop = popUpCard.querySelector('.modal-desktop');
      modalDesktop.style.display = 'block';
    }
    poppedUpCard.appendChild(popUpCard);
  });
}

poppedUpCard.addEventListener('click', () => {
  poppedUpCard.style.display = 'none';
  popUpCard.remove();
});
