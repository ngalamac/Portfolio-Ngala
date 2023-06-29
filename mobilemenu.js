const menu = {
  navigation: document.querySelector('.nav-links'),
  mobileButton: document.querySelector('.mobile-menu'),
  closeButton: document.querySelector('.close-menu'),
  linkItems: document.querySelectorAll('.poplink'),
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
      this.navigation.classList.add('show');
      this.mobileButton.classList.add('hide');
      this.closeButton.classList.add('show');
      document.body.style.overflow = 'hidden';
      this.isMenuOpen = true;
      this.closeMobileMenu.classList.add('hide');
    }
  },

  closeMobileMenu() {
    if (this.isMenuOpen) {
      this.navigation.classList.remove('show');
      this.mobileButton.classList.remove('hide');
      this.closeButton.classList.remove('show');
      document.body.style.overflow = 'auto';
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
