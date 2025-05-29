// tabs
function initTabs() {
  const tabsContainer = document.querySelector('[data-hf-tabs]');
  const buttonsContainer = document.querySelector('[data-hf-tabs-buttons]');
  const contentContainer = document.querySelector('[data-hf-tabs-content]');

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

  const setDefaultActiveTab = () => {
    const activeButton = contentContainer.querySelector('[data-hf-button="active"]');
    if (!activeButton) {
      buttons[0].setAttribute('data-hf-tabs-button', 'active');
      tabs[0].setAttribute('data-hf-tab', 'active');
    }
  };

  buttons.forEach((button, index) => {
    addClickLogic(button, index);
    setDefaultActiveTab();
  });
}

window.hf = window.hf || {}
window.hf.components = window.hf.components || {}
window.hf.components.tabs = {
  init: initTabs
}