# use-collapsible

A React.js hook for creating collapsible content.

## Installation

```bash
npm install use-collapsible-hook
```

## Usage

```jsx
import React from 'react';
import useCollapsible from 'use-collapsible-hook';

const App = () => {
    const {
        ref,
        isCollapsed,
        height,
        onToggle,
    } = useCollapsible(true);

    return (
        <div>
            <button onClick={onToggle}>Toggle</button>

            <div ref={ref} style={{
                height: isCollapsed ? 0 : height
            }}>
                <p>Some collapsible content</p>
                <p>More collapsible content</p>
                <p>Even more collapsible content</p>
            </div>
        </div>
    );
};
```
