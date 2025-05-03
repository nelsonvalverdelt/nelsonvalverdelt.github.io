function menu() {
  let dom = {
    $menu: document.querySelector(".menu-body"),
    $viewMode: document.getElementById("view-mode"),
  };
  let data = {
    menuItems: menuRoutes,
  };
  let fn = {
    loadMenu: () => {
      let menuItemBuild = '<ul class="menu-items">';
      let menuLevelItems = fn.createLevelItems(data.menuItems);
      menuItemBuild += fn.recursiveFullItems(menuLevelItems);
      menuItemBuild += "</ul>";
      dom.$menu.innerHTML = menuItemBuild;
    },
    createLevelItems: (items, nextLevel = 0) => {
      for (const item of items) {
        item.level = nextLevel + 1;
        if (item.children.length > 0) {
          fn.createLevelItems(item.children, item.level);
        }
      }
      return items;
    },
    recursiveFullItems: (children) => {
      let menuItemBuild = "";
      for (const item of children) {
        menuItemBuild += `<li class="menu-item ${item.active ? "active" : ""}" data-level="${item.level}">`;
        menuItemBuild += fn.getMenuItem(item);
        if (item.children.length > 0) {
          menuItemBuild += `<ul class="menu-subitems ${item.level === 1 ? "shadow-line" : "left-sub-item"}">`;
          menuItemBuild += fn.recursiveFullItems(item.children);
          menuItemBuild += "</ul>";
        }
        menuItemBuild += "</li>";
      }
      return menuItemBuild;
    },
    getMenuItem: (item) => {
      const itemAcollapsed = item.children.length > 0 ? '<button type="button" class="item-collapsed" onclick="$menu.triggerItemMenu(this)"></button>' : "";
      const icon = item?.icon ? ` <em class="icon ${item.icon}"></em>` : "";
      const span = item?.span && item.children.length === 0 ? `<span class="tag-count">${item.span}</span>` : "";
      return `
          <a ${item?.path ? `href=${item.path}` : ""} class="menu-item-link">
            ${icon}
            <span class="name">${item.name}</span>
            ${span}
            ${itemAcollapsed}
          </a>
        `;
    },
    validateResponse: () => {
      if (window.innerWidth <= 768) {
        dom.$viewMode.checked = true;
      }
    },
    actions: {
      triggerItemMenu: (e) => {
        const menuItem = e.closest(".menu-item");
        const menuItemIsActive = menuItem.classList.contains("active");
        if (menuItemIsActive) {
          menuItem.classList.remove("active");
        } else {
          menuItem.classList.add("active");
        }
      },
    },
  };
  fn.loadMenu();
  fn.validateResponse();
  return {
    triggerItemMenu: fn.actions.triggerItemMenu,
  };
}

let $menu = menu();
