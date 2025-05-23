function prismToast() {
  let dom = {
    $setTimeout: null,
  };
  let data = {};
  let fn = {
    initToast: () => {
      const toast = document.createElement("div");
      toast.classList.add("prism-toast");
      toast.classList.add("hide");
      const toastContent = document.createElement("div");
      toastContent.classList.add("content");

      const icon = document.createElement("em");
      icon.classList.add("icon");
      icon.classList.add("bi");
      icon.classList.add("bi-clipboard");

      const message = document.createElement("span");
      message.classList.add("message");

      toastContent.appendChild(icon);
      toastContent.appendChild(message);

      toast.appendChild(toastContent);

      document.body.appendChild(toast);
    },
    reset: () => {
      if (dom.$setTimeout) {
        clearTimeout(dom.$setTimeout);
        const toast = document.querySelector(".prism-toast");
        toast.classList.add("hide");
      }
    },
    show: (message) => {
      fn.reset();
      const toast = document.querySelector(".prism-toast");
      toast.querySelector(".message").innerHTML = message;
      toast.classList.remove("hide");
      dom.$setTimeout = setTimeout(() => toast.classList.add("hide"), 3000);
    },
  };
  fn.initToast();
  return {
    show: fn.show,
  };
}

$prismToast = prismToast();
