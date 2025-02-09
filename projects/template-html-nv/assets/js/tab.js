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
    activeBodyTabById: (tabContent, tabHeaderItemId) => {
      const tabBodyItem = tabContent.querySelector(`.tab-body > .tab-body-item.${tabHeaderItemId}`);
      tabBodyItem.classList.add("active");
    },
    initTab: () => {
      const tabContent = document.querySelector(tabId);
      const tabHeaderItems = tabContent.querySelectorAll(".tab-header > .tab-header-item");
      const tabBodyItems = tabContent.querySelectorAll(".tab-body > .tab-body-item");
      for (const tabHeaderItem of tabHeaderItems) {
        tabHeaderItem.addEventListener("click", () => {
          fn.resetTabHeaderActiveTabs(tabHeaderItems);
          fn.resetTabBodyActiveTabs(tabBodyItems);
          fn.activeHeaderTab(tabHeaderItem);
          fn.activeBodyTabById(tabContent, tabHeaderItem.id);
        });
      }
    },
  };
  fn.initTab();
}
