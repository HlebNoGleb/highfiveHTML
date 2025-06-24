// tabs
function initTabs(selector, config = {}) {
  const tabsContainer = document.querySelector(selector);

  if (!tabsContainer) {
    return;
  }

  const buttonsContainer = tabsContainer.querySelector(
    '[data-hf-tabs-buttons]'
  );
  const contentContainer = tabsContainer.querySelector(
    '[data-hf-tabs-content]'
  );

  if (!buttonsContainer || !contentContainer) {
    return;
  }

  const buttons = buttonsContainer.querySelectorAll('[data-hf-tabs-button]');
  const tabs = contentContainer.querySelectorAll('[data-hf-tab]');

  if (!buttons.length || !tabs.length) {
    return;
  }

  const addClickLogic = (button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.setAttribute('data-hf-tabs-button', ''));
      button.setAttribute('data-hf-tabs-button', 'active');
      tabs.forEach((tab) => tab.setAttribute('data-hf-tab', ''));
      tabs[index].setAttribute('data-hf-tab', 'active');
    });
  };

  const setDefaultActiveTab = (openFirst) => {
    if (!openFirst) {
      return;
    }
    const activeButton = contentContainer.querySelector(
      '[data-hf-button="active"]'
    );
    if (!activeButton) {
      buttons[0].setAttribute('data-hf-tabs-button', 'active');
      tabs[0].setAttribute('data-hf-tab', 'active');
    }
  };

  buttons.forEach((button, index) => {
    addClickLogic(button, index);
    setDefaultActiveTab(config.openFirst);
  });
}

function initAccordion(selector, config = {}) {
  const accordion = document.querySelector(selector);

  if (!accordion) {
    return;
  }

  const items = accordion.querySelectorAll('[data-hf-accordion-item]');

  if (!items.length) {
    return;
  }

  const addClickLogic = (button) => {
    const header = button.querySelector('[data-hf-accordion-item-header]');
    header.addEventListener('click', () => {
      if (config.closeOthers) {
        items.forEach((i) => i.setAttribute('data-hf-accordion-item', ''));
      }

      if (button.getAttribute('data-hf-accordion-item') === 'active') {
        button.setAttribute('data-hf-accordion-item', '');
      } else {
        button.setAttribute('data-hf-accordion-item', 'active');
      }
    });
  };

  const setDefaultActiveTab = (openFirst) => {
    if (!openFirst) {
      return;
    }
    const activeButton = accordion.querySelector(
      '[data-hf-accordion-item="active"]'
    );
    if (!activeButton) {
      items[0].setAttribute('data-hf-accordion-item', 'active');
    }
  };

  items.forEach((button) => {
    addClickLogic(button);
    setDefaultActiveTab(config.openFirst);
  });
}

window.hf = window.hf || {};
window.hf.components = window.hf.components || {};

window.hf.components.tabs = {
  init: initTabs,
};

window.hf.components.accordion = {
  init: initAccordion,
};

window.hf.components.menu = {
  init: initMenu,
};

function initMenu(
  selector,
  config = {
    menuItemSelector: 'li a',
    menuItemWrapperSelector: 'li',
    subLinksWrapperSelector: 'ul',
    buttonBackInject: true,
    buttonBackHtml: '<button>Back</button>',
  }
) {
  const menuContainer = document.querySelector(selector);

  if (!menuContainer) {
    return;
  }

  const menuItems = menuContainer.querySelectorAll(config.menuItemSelector);

  if (!menuItems.length) {
    return;
  }

  const addClickLogic = (item) => {
    item.addEventListener('click', () => {
      // remove active class
      menuItems.forEach((i) => {
        if (!item.closest(`${config.menuItemWrapperSelector}.active`)) {
          i.closest(config.menuItemWrapperSelector).classList.remove('active');
          i.closest(config.menuItemWrapperSelector).querySelectorAll("[data-hf-menu-button-back]").forEach((buttonBack) => {
            buttonBack.remove();
          })
        }
      });

      // add active class
      item.closest(config.menuItemWrapperSelector).classList.add('active');

      // add previous link
      if (item.closest(config.menuItemWrapperSelector).querySelector(config.subLinksWrapperSelector) && config.buttonBackInject) {

        if (item.closest(config.menuItemWrapperSelector).querySelector('[data-hf-menu-button-back]')) {
          return;
        }

        // create button back
        const buttonBackContainer = document.createElement('div');
        buttonBackContainer.setAttribute('data-hf-menu-button-back', '');
        buttonBackContainer.innerHTML = config.buttonBackHtml;

        // add click logic
        buttonBackContainer.addEventListener('click', (e) => {
          item.closest(config.menuItemWrapperSelector).classList.remove('active');
          buttonBackContainer.remove();
        });

        //inject button back
        item.closest(config.menuItemWrapperSelector).prepend(buttonBackContainer);
      }
    });
  };

  menuItems.forEach((item) => {
    addClickLogic(item);
  });

  document.addEventListener('click', function (event) {
    if (!menuContainer.contains(event.target) && event.target.innerHTML === config.buttonBackHtml) {
      menuItems.forEach((item) => {
        item.closest(config.menuItemWrapperSelector).classList.remove('active');
        // const buttonBacks = item.closest(config.menuItemWrapperSelector).querySelectorAll('[data-hf-menu-button-back]');
        // buttonBacks.forEach((buttonBack) => {
        //   buttonBack.remove();
        // });
      });

      if (menuContainer.querySelector('[data-hf-menu-button-back]')) {
        const buttonBacks = menuContainer.querySelectorAll('[data-hf-menu-button-back]');
        buttonBacks.forEach((buttonBack) => {
          buttonBack.remove();
        });
      }
    }
  });
}
