// tabs
function initTabs(selector, config = {}) {
  const tabsContainer = document.querySelector(selector);

  if (!tabsContainer) {
    return;
  }

  const buttonsContainer = tabsContainer.querySelector('[data-hf-tabs-buttons]');
  const contentContainer = tabsContainer.querySelector('[data-hf-tabs-content]');

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
      buttons.forEach(btn => btn.setAttribute('data-hf-tabs-button', ''));
      button.setAttribute('data-hf-tabs-button', 'active')
      tabs.forEach(tab => tab.setAttribute('data-hf-tab', ''));
      tabs[index].setAttribute('data-hf-tab', 'active');
    });
  };

  const setDefaultActiveTab = (openFirst) => {
    if (!openFirst) {
      return;
    }
    const activeButton = contentContainer.querySelector('[data-hf-button="active"]');
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
        items.forEach(i => i.setAttribute('data-hf-accordion-item', ''));
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
    const activeButton = accordion.querySelector('[data-hf-accordion-item="active"]');
    if (!activeButton) {
      items[0].setAttribute('data-hf-accordion-item', 'active');
    }
  };

  items.forEach((button) => {
    addClickLogic(button);
    setDefaultActiveTab(config.openFirst);
  });
}

window.hf = window.hf || {}
window.hf.components = window.hf.components || {}

window.hf.components.tabs = {
  init: initTabs
}

window.hf.components.accordion = {
  init: initAccordion
}

window.hf.components.menu = {
  init: initMenu
}

function initMenu(selector, config = {
  menuItemSelector: 'li a',
  menuItemWrapperSelector: 'li',
}) {
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
      menuItems.forEach(i => {
        if (!item.closest(`${config.menuItemWrapperSelector}.active`)) {
          i.closest(config.menuItemWrapperSelector).classList.remove('active');
        }
      });
      item.closest(config.menuItemWrapperSelector).classList.add('active');
    });
  };

  menuItems.forEach((item) => {
    addClickLogic(item);
  });

  document.addEventListener('click', function (event) {
    if (!menuContainer.contains(event.target)) {
      menuItems.forEach((item) => {
        item.closest(config.menuItemWrapperSelector).classList.remove('active');
      })
    }
  });
}