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
      for (const item of data.menuItems) {
        menuItemBuild += `<li class="menu-item ${item.active ? "active" : ""}">`;
        menuItemBuild += fn.getMenuItem(item);
        if (item.children.length > 0) {
          menuItemBuild += '<ul class="menu-subitems">';
          menuItemBuild += fn.recursiveFullItems(item.children);
          menuItemBuild += "</ul>";
        }
        menuItemBuild += "</li>";
      }
      menuItemBuild += "</ul>";
      dom.$menu.innerHTML = menuItemBuild;
    },
    recursiveFullItems: (children, menuItemBuild = "") => {
      for (const item of children) {
        menuItemBuild += `<li class="menu-item ${item.active ? "active" : ""}">`;
        menuItemBuild += fn.getMenuItem(item);
        menuItemBuild += "</li>";
        fn.recursiveFullItems(item.children, menuItemBuild);
      }
      return menuItemBuild;
    },
    getMenuItem: (item) => {
      const itemAcollapsed = item.active
        ? '<button type="button" class="item-collapsed" onclick="$menu.triggerItemMenu(this)"></button>'
        : "";
      const icon = item.icon ? ` <em class="icon ${item.icon}"></em>` : "";
      const span = item?.span ? `<span class="tag-count">${item.span}</span>` : "";
      return `
          <div class="menu-item-link">
            ${icon}
            <a ${item.path ? `href=${item.path}` : ""} class="name">${item.name}</a>
            ${span}
            ${itemAcollapsed}
          </div>
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
