/**
 * @function createNode
 *
 * @argument {1} ~ DOM ID
 * @argument {2} ~ Tag
 * @argument {3} ~ Content
 * @argument {4} ~ ClassName
 * @argument {5} ~ Event
 * @argument {6} ~ Handler
 *
 * @returns NODE
 * */
 function createNode({
    id = Math.random() * 1000,
    tag = "div",
    content = null,
    className = "",
    event = "click",
    handler = () => {},
  }) {
    //document đại diện cho tài liệu html ,cầu nối tương tác js mới html
    const node = document.createElement(tag);
    //thay đổi nội dung của các thẻ 
    node.innerHTML = content;
    node.className = className;
    node.id = id;
    //addEventListener : thêm 1 sự kiện vào 
    node.addEventListener(event, handler);
    return node;
  }
  
  /**
   * @function handleToggleClass
   *
   * @argument {1} ~ DOM ID
   * @argument {2} ~ ClassName
   *
   * */
  function handleToggleClass(id, className) {
    //trả về dối tượng đầu tiến chứa id đấy
    const node = document.getElementById(id);
    if (!node) return;
    //classlist tạo ra 1 mảng chứa các class [" s "," b "]
    //toggle  
    node.classList.toggle(className);
  }
  
  /**
   * @function removeAllClassActive
   * @argument {1} ~ Selector
   * @argument {2} ~ ClassName
   * */
  
  function removeAllClassActive(selector, className) {
    //
    const nodeList = document.querySelectorAll(selector);
    if (!nodeList.length) return;
    nodeList.forEach((node) => {
      // 3 trường hợp class :class , class="", rỗng
      //xóa các class của các thẻ có class là classname trả ra class
      node.classList.remove(className);
    });
  }
  
  function createTab(tabs, root) {
    let activeId = 0;
  
    const nodeList = tabs.map((tab, idx) => {
      const tabId = `tab-${idx}`;
      return createNode({
        content: tab.label,
        className: `tab ${idx === 0 ? "active" : ""}`,
        event: "click",
        id: tabId,
        handler: () => {
          if (activeId === idx) return;
          activeId = idx;
          removeAllClassActive(".tab", "active");
          handleToggleClass(tabId, "active");
        },
      });
    });
  
    const tabContainer = createNode({
      className: "tab-container flex",
    });
  
    nodeList.forEach((node) => {
      // đưa con node vào  container 
      tabContainer.appendChild(node);
    });
  
    root.appendChild(tabContainer);
  }
  