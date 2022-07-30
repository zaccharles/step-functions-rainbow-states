const themes = [
  // [bg-unselected, bg-selected, border, type-text, name-text]
  ['#ebecf7', '#e2e2fc', '#00009c', '#67679a', '#1f1f77'], // purple
  ['#fefaf3', '#fbf5e0', '#9c6800', '#9a8967', '#77591f'], // orange
  ['#e8f5e9', '#daf8da', '#009c00', '#679a67', '#1f771f'], // green
  ['#f7eef8', '#fee7fe', '#9c009c', '#9a679a', '#771f77'], // pink
  ['#ebf7f7', '#e3fcfc', '#009c9c', '#528080', '#196060'], // cyan
  ['#f7ecec', '#ffe2e2', '#9c0000', '#983b3b', '#9b0000'], // red
];

let rollbacks: (() => void)[] = [];

function tasteTheRainbow(): void {
  rollbacks.forEach((rollback) => {
    try {
      rollback();
    } catch (err) {
      console.error(err);
    }
  });
  rollbacks = [];

  const stateNodes = document.querySelectorAll('.node.state');

  const stateNames = Array.from(stateNodes).map((stateNode) =>
    stateNode.querySelector('text:last-child')?.textContent?.trim()
  );

  const groupNames = stateNames
    .filter((name) => name?.includes(':'))
    .map((name) => `${name?.split(':', 2)[0]}:`)
    .filter((name, index, self) => self.indexOf(name) === index);

  const groups = groupNames.map((group) =>
    Array.from(stateNodes).filter((stateNode) =>
      stateNode
        .querySelector('text:last-child')
        ?.textContent?.trim()
        .startsWith(group)
    )
  );

  groups.forEach((group, index) => {
    const theme = themes[index % themes.length];

    group.forEach((stateNode) => {
      const rect = (stateNode.querySelector('rect') as SVGRectElement).style;
      const type = (stateNode.querySelector('text:first-child') as HTMLElement)
        .style;
      const name = (stateNode.querySelector('text:last-child') as HTMLElement)
        .style;

      const stateNodeData = (stateNode as SVGElement).dataset;
      const before = [rect.fill, rect.stroke, type.fill, name.fill];

      [rect.fill, , rect.stroke, type.fill, name.fill] = theme;
      [stateNodeData.fillUnselected, stateNodeData.fillSelected] = theme;

      const isSelected = stateNode.classList.contains('selected');
      rect.fill =
        (isSelected
          ? stateNodeData.fillSelected
          : stateNodeData.fillUnselected) ?? '';

      rollbacks.push(() => {
        [rect.fill, rect.stroke, type.fill, name.fill] = before;
      });
    });
  });
}

const graphCallback: MutationCallback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      tasteTheRainbow();
      return;
    }
    if (mutation.type === 'attributes') {
      if (mutation.attributeName === 'class') {
        const newValue =
          (mutation.target as Element).getAttribute('class') ?? '';

        const isStateNode =
          newValue.includes('node') && newValue.includes('state');

        if (isStateNode) {
          const stateNode = mutation.target as SVGElement;
          const isSelected = newValue.includes('selected');

          const {fillUnselected, fillSelected} = stateNode.dataset;

          const rect = (stateNode.querySelector('rect') as SVGRectElement)
            .style;

          rect.fill = (isSelected ? fillSelected : fillUnselected) ?? '';
        }
      }
    }
  }
};

const graphObserver = new MutationObserver(graphCallback);
const graphObserverConfig: MutationObserverInit = {
  attributes: true,
  childList: true,
  subtree: true,
};

const documentCallback: MutationCallback = (mutationList, documentObserver) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      for (const node of Array.from(mutation.addedNodes)) {
        if (node instanceof SVGElement && node.classList.contains('graph')) {
          documentObserver.disconnect();
          graphObserver.observe(node, graphObserverConfig);
        }
      }
    }
  }
};

const graph = document.querySelector('svg.graph');

if (graph) {
  graphObserver.observe(graph, graphObserverConfig);
  tasteTheRainbow();
} else {
  const documentObserver = new MutationObserver(documentCallback);
  const documentObserverConfig: MutationObserverInit = {
    attributes: false,
    childList: true,
    subtree: true,
  };
  documentObserver.observe(document, documentObserverConfig);
}

export {};
