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
