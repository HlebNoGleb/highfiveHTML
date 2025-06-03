// tabs
function initTabs(selector, config = {}) {
  const tabsContainer = document.querySelector(selector);
  const buttonsContainer = tabsContainer.querySelector('[data-hf-tabs-buttons]');
  const contentContainer = tabsContainer.querySelector('[data-hf-tabs-content]');

  if (!tabsContainer || !buttonsContainer || !contentContainer) {
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
  const items = accordion.querySelectorAll('[data-hf-accordion-item]');

  if (!accordion || !items.length) {
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