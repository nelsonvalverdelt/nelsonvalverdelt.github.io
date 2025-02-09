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
    recursiveSimpleItems: (children, menuItemBuild = "") => {
      for (const item of children) {
        menuItemBuild += fn.getMenuItem(item);
        fn.recursiveSimpleItems(item.children, menuItemBuild);
      }
      return menuItemBuild;
    },
    getMenuItem: (item) => {
      const itemAcollapsed = item.active ? '<em class="item-collapsed"></em>' : "";
      const icon = item.icon ? ` <em class="icon ${item.icon}"></em>` : "";
      const span = item.span ? `<span class="tag-count">${item.span}</span>` : "";
      return `
          <a href="${item.path}" class="menu-item-link">
            ${icon}
            <span class="name">${item.name}</span>
            ${span}
            ${itemAcollapsed}
          </a>
        `;
    },
  };
  return fn.loadMenu();
}

menu();
