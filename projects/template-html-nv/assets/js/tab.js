function fnTab(tabId) {
  let dom = {};
  let data = {};
  let fn = {
    resetTabHeaderActiveTabs: (tabHeaderItems) => {
      for (const tabHeaderItem of tabHeaderItems) {
        if (tabHeaderItem.classList.contains("active")) tabHeaderItem.classList.remove("active");
      }
    },
    resetTabBodyActiveTabs: (tabBodyItems) => {
      for (const tabBodyItem of tabBodyItems) {
        if (tabBodyItem.classList.contains("active")) tabBodyItem.classList.remove("active");
      }
    },
    activeHeaderTab: (tabHeaderItem) => {
      tabHeaderItem.classList.add("active");
    },
    activeBodyTabById: (tabHeaderItemId) => {
      const tabBodyItem = document.querySelector(`${tabId} > .tab-body > .tab-body-item.${tabHeaderItemId}`);
      tabBodyItem.classList.add("active");
    },
    initTab: () => {
      const tabHeaderItems = document.querySelectorAll(`${tabId} > .tab-header > .tab-header-item`);
      const tabBodyItems = document.querySelectorAll(`${tabId} > .tab-body > .tab-body-item`);
      for (const tabHeaderItem of tabHeaderItems) {
        tabHeaderItem.addEventListener("click", () => {
          fn.resetTabHeaderActiveTabs(tabHeaderItems);
          fn.resetTabBodyActiveTabs(tabBodyItems);
          fn.activeHeaderTab(tabHeaderItem);
          fn.activeBodyTabById(tabHeaderItem.id);
        });
      }
    },
  };
  fn.initTab();
}
