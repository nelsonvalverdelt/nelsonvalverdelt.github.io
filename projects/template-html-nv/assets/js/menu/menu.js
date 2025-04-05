function menu() {
  let dom = {
    $menu: document.querySelector(".menu-body"),
  };
  let data = {
    menuItems: menuRoutes,
  };
  let fn = {
    loadMenu: () => {
      let menuItemBuild = '<ul class="menu-items">';
      menuItemBuild += fn.recursiveFullItems(data.menuItems);
      menuItemBuild += "</ul>";
      dom.$menu.innerHTML = menuItemBuild;
    },
    recursiveFullItems: (children, level = 1) => {
      let menuItemBuild = "";
      for (const item of children) {
        menuItemBuild += `<li class="menu-item ${item.active ? "active" : ""}" data-level="${level}">`;
        menuItemBuild += fn.getMenuItem(item, level);
        if (item.children.length > 0) {
          level++;
          menuItemBuild += `<ul class="menu-subitems ${level === 2 ? "shadow-line" : "left-sub-item"}">`;
          menuItemBuild += fn.recursiveFullItems(item.children, level);
          menuItemBuild += "</ul>";
          level = 1;
        }
        menuItemBuild += "</li>";
      }
      return menuItemBuild;
    },
    getMenuItem: (item, level) => {
      const itemAcollapsed = item.children.length > 0 ? '<button type="button" class="item-collapsed" onclick="$menu.triggerItemMenu(this)"></button>' : "";
      const icon = item?.icon ? ` <em class="icon ${item.icon}"></em>` : "";
      const span = item?.span && level >= 2 && item.children.length === 0 ? `<span class="tag-count">${item.span}</span>` : "";
      return `
          <a ${item?.path ? `href=${item.path}` : ""} class="menu-item-link">
            ${icon}
            <span class="name">${item.name}</span>
            ${span}
            ${itemAcollapsed}
          </a>
        `;
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
  return {
    triggerItemMenu: fn.actions.triggerItemMenu,
  };
}

let $menu = menu();
