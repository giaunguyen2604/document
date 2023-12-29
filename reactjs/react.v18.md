### What is Concurrent React? 
**What it is:**

- A new behind-the-scenes mechanism in React 18 that enables more responsive and fluid user experiences.
- It works by preparing multiple versions of the UI at the same time, allowing React to prioritize tasks and respond quickly to user input.
- It's not a feature you directly interact with, but it powers several new features and improvements.

**Key properties:**

- Interruptible rendering: React can pause, resume, or abandon rendering tasks to handle more urgent updates, ensuring a smooth user experience even during heavy rendering.
- Reusable state: React can efficiently remove and restore UI sections while preserving their state, making navigation and transitions seamless.

**Benefits:**

- Improved responsiveness: React can respond to user interactions even while rendering complex UI, reducing lag and keeping the app feel snappy.
- New features: Concurrent React enables features like Suspense, transitions, and streaming server rendering, which offer better performance and user experiences.

**Developer implications:**

- While you don't need to know the intricate details of concurrency, understanding its high-level concepts can help you leverage its benefits in your React development.
- Concurrent React is a foundational update, and more features are expected to build upon it in future React releases.

### What’s New in React 18 
#### Automatic Batching
**What it is:**

A technique React uses to optimize performance by combining multiple state updates into a single re-render, rather than re-rendering the component for each individual update.

*Automatic batching (new in React 18):*
-  Automatically batches updates from any source, including promises, setTimeout, native event handlers, and more.
-  You don't need to manually manage batching in most cases, leading to simpler code and better performance.

**Benefits:**

- Reduces unnecessary re-renders
- Ensures consistent UI updates: By batching updates, React guarantees that the UI will reflect all changes in a cohesive way, preventing visual glitches or inconsistencies.
- Simplifies code: Developers no longer need to worry about manually batching updates in most scenarios, leading to cleaner and more maintainable code.


#### Transitions
- It's a new concept in React to distinguish between urgent and non-urgent updates.
- Urgent updates: 
  - Immediate response: These updates directly reflect user input like typing, clicking, or pressing. They need to be handled immediately to feel responsive and natural (Typing in a text field, clicking a button, changing a dropdown selection.)
- Transition updates:
  - Non-urgent updates: These updates often involve rendering large or complex UI changes that don't need to be seen instantly by the user.
  - Delayed rendering: React can prioritize urgent updates and postpone transitions slightly to maintain responsiveness.
    Examples: Filtering a list, loading data, rendering complex visualizations.


#### New Suspense Features
Makes managing UI loading states a core part of the React programming model
Allows for declaratively defining loading states and fallback content for components that are waiting for data or resources.

**Evolution:**
- Introduced earlier with limited capabilities for code splitting.
- Now expanded in React 18 with server-side support and integration with concurrent rendering.

**Key features:**
- Server-side support
- Integration with transitions
- Improved user experience

**Benefits:**
- Simpler code for handling loading states.
- Better user experience with smoother transitions and less jarring loading indicators.
- Foundation for building higher-level features that leverage loading states.

#### New Client and Server Rendering APIs 

**React DOM Client **
- createRoot:  Use it instead of ReactDOM.render
- hydrateRoot: hydrate a server rendered application, use it instead of ReactDOM.hydrate.

**React DOM Server**
- These new APIs:
  - renderToPipeableStream: for streaming in Node env
  - renderToReadableStream: for modern edge runtime environments, such as Deno and Cloudflare workers.

#### New Strict Mode Behaviors 
**Planned feature:**
- Reusable state: React aims to enable efficient addition and removal of UI sections while preserving their state for immediate re-display.
- Benefits: Improved performance, seamless navigation and transitions, better user experience.

**Challenge:**
- Component resilience: Components need to handle multiple mounts and unmounts gracefully, ensuring correct behavior.

**Strict Mode enhancement (React 18):**
- Development-only check: Automatically unmounts and remounts components on first mount, simulating the future feature's behavior.
- Purpose: To expose potential issues with effects and state management early in development.
- Benefit: Helps developers ensure their components are ready for the upcoming reusable state feature.

**Key takeaway:**

- React is working towards a more efficient and user-friendly approach to UI state management.
- Developers can use the enhanced Strict Mode in React 18 to identify and address potential compatibility issues in their components, preparing for future features.

#### New Hooks 
1. **useId** 
- Generating unique IDs on both the client and server, avoiding hydration mismatches.
→ `useId` is not for generating keys in a list. Keys should be generated from your data.
2. **useTransition**
- `useTransition` and `startTransition` let you mark some state updates as **not** urgent.
- Other state updates are considered urgent by default.
- Allow urgent state updates to interrupt non-urgent state updates.

3. **useDeferredValue**
`useDeferredValue` lets you defer re-rendering a non-urgent part of the tree.

4. **useSyncExternalStore**
`useSyncExternalStore` is a React Hook that lets you subscribe to an external store.

```jsx
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}
```
4. **useInsertionEffect**
`useInsertionEffect` allows inserting elements into the DOM before any layout effects fire.
https://react.dev/reference/react/useInsertionEffect 

```jsx
import { useInsertionEffect } from 'react';

// Inside your CSS-in-JS library
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inject <style> tags here ...
  });
  return rule;
}
```