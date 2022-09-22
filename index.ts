import { useCallback, useState } from "react";

const useCollapsible = (isCollapsedOnLoad: boolean = false) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [height, setHeight] = useState<"auto" | number>("auto");
  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        const { height: nodeHeight } = node.getBoundingClientRect();
        setHeight(nodeHeight);
        if (isCollapsedOnLoad) {
          setIsCollapsed(true);
        }
      }
    },
    [isCollapsedOnLoad]
  );

  return { ref, isCollapsed, height, onToggle };
};

export default useCollapsible
