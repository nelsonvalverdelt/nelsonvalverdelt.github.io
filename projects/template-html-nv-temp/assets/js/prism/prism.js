function customPrism() {
  let dom = {};
  let data = {};
  let fn = {
    insertBtnCopyCode: () => {
      const codeAll = document.querySelectorAll('[class^="language-"]');
      for (const codeItem of codeAll) {
        let innerHtml = codeItem.innerHTML;
        const btnElement = document.createElement("button");
        btnElement.type = "button";
        btnElement.textContent = "Copy";
        btnElement.classList.add("btn");
        btnElement.classList.add("rounded");
        btnElement.classList.add("btn-primary");
        btnElement.addEventListener("click", () => {
          navigator.clipboard.writeText(innerHtml);
          $prismToast.show("Code copied to clipboard");
        });
        codeItem.parentElement.prepend(btnElement);
      }
    },
    init: () => {
      const codeAll = document.querySelectorAll('[class^="language-"]');
      for (const codeItem of codeAll) {
        codeItem.innerHTML = codeItem.innerHTML.replace(/</g, "&lt;");
        codeItem.innerHTML = codeItem.innerHTML.replace(/>/g, "&gt;");
      }
    },
  };
  fn.insertBtnCopyCode();
  fn.init();
}
customPrism();