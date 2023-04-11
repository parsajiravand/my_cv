---
title: "Best Practices with Setup Function and Composition API in Vue 3"
description: "HiSeo"
img: "https://hiseo.co/wp-content/uploads/2023/04/Logo-HISEO.svg"
tags: [Vue, CompositionAPI, BestPractice, first]
lang: "en"
---

## 1. Keep Setup Function Small

The setup function is responsible for setting up the component before it's mounted. It's a good practice to keep the setup function small and focused on its primary responsibilities. The setup function should mainly be used for:

Declaring reactive data and reactive properties
Registering computed properties and methods
Registering event handlers and lifecycle hooks
Importing and injecting dependencies

## 2. Use Composition Functions

The Composition API allows you to create and reuse groups of reactive properties and functions with ease. Instead of declaring all the reactive properties and functions inside the setup function, you can extract them into a composition function and use them wherever needed.

```javascript
import { ref, computed } from "vue";

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  const doubleCount = computed(() => count.value * 2);

  return {
    count,
    increment,
    doubleCount,
  };
}
```

Then, you can use the useCounter function in your setup function:

```javascript
import { useCounter } from "./useCounter";

export default {
  setup() {
    const { count, increment, doubleCount } = useCounter();

    return {
      count,
      increment,
      doubleCount,
    };
  },
};
```

This allows you to organize your code into small, reusable functions and keep your setup function focused on setting up the component.

## 3. Use onXXX Event Naming Convention

When registering event handlers with the Composition API, it's recommended to use the onXXX naming convention. This makes it clear that the function is an event handler and improves readability.

```javascript
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      // Do something when the component is mounted
    });
  },
};
```

## 4. Use Refs for DOM Elements

When working with DOM elements, it's a good practice to use ref instead of data or computed. This allows you to easily access the DOM element and its properties.

```javascript
import { ref } from "vue";

export default {
  setup() {
    const inputRef = ref(null);

    function focusInput() {
      inputRef.value.focus();
    }

    return {
      inputRef,
      focusInput,
    };
  },
};
```

```html
<template>
  <div>
    <input type="text" ref="inputRef" />
    <button @click="focusInput">Focus Input</button>
  </div>
</template>

<script>
  export default {
    setup() {
      const inputRef = ref(null);

      function focusInput() {
        inputRef.value.focus();
      }

      return {
        inputRef,
        focusInput,
      };
    },
  };
</script>
```

## 5. Use Injection for Shared State

The provide and inject functions allow you to share data between components without passing them down as props. This is especially useful for global data that needs to be accessed by multiple components.

```javascript

import { provide, inject } from 'vue';

const UserContext = Symbol();

export function provideUser(user) {
  provide(UserContext, user);
}

export function useUser() {
  const user = inject(UserContext);

```
