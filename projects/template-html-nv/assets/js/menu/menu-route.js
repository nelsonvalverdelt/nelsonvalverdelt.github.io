const menuRoutes = [
  {
    name: "Home",
    icon: "bi-house",
    path: null,
    active: false,
    children: [],
  },
  {
    name: "Dashboard",
    icon: "bi-bar-chart-line",
    path: null,
    active: false,
    children: [],
  },
  {
    name: "Forms",
    icon: "bi-columns",
    path: null,
    active: false,
    children: [
      {
        name: "Basic Form",
        icon: "",
        path: "",
        active: false,
        children: []
      },
    ],
  },
  {
    name: "Components",
    icon: "bi-code-square",
    path: null,
    active: true,
    children: [
      {
        name: "Buttons",
        icon: null,
        path: "/projects/template-html-nv/pages/forms/buttons.html",
        active: false,
        span: 6,
        children: [],
      },
      {
        name: "Checkbox",
        icon: null,
        path: "/projects/template-html-nv/pages/forms/checkbox.html",
        active: false,
        span: 2,
        children: [],
      },
      {
        name: "Input",
        icon: null,
        path: "/projects/template-html-nv/pages/forms/input.html",
        active: false,
        span: 3,
        children: [],
      },
      {
        name: "Radio",
        icon: null,
        path: "/projects/template-html-nv/pages/forms/radio.html",
        active: false,
        span: 2,
        children: [],
      },
      {
        name: "Switch",
        icon: null,
        path: "/projects/template-html-nv/pages/forms/switches.html",
        active: false,
        span: 2,
        children: [],
      },
    ],
  },
  {
    name: "Panel",
    icon: "bi-window-split",
    path: null,
    active: true,
    children: [
      {
        name: "Card",
        icon: null,
        path: "/projects/template-html-nv/pages/panel/card.html",
        active: false,
        children: []
      },
      {
        name: "Tabs",
        icon: null,
        path: "/projects/template-html-nv/pages/panel/tabs.html",
        active: false,
        children: []
      },
    ],
  },
];
