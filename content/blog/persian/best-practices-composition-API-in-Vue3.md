---
title: "Best Practices with Setup Function and Composition API in Vue 3"
description: "HiSeo"
img: "https://hiseo.co/wp-content/uploads/2023/04/Logo-HISEO.svg"
tags: [Vue, CompositionAPI, BestPractice, first]
lang: "fa"
---

## 1. نگه داشتن تابع Setup کوچک
تابع Setup مسئول تنظیم کامپوننت قبل از نصب آن است. بهتر است تابع Setup را کوچک و متمرکز بر مسئولیت های اصلی خود نگه دارید. تابع Setup باید عمدتاً برای موارد زیر استفاده شود:

اعلان داده های ویژگی های واکنشی
ثبت ویژگی های محاسبه شده و متدها
ثبت کننده های رویداد و هوک های چرخه زندگی
وارد کردن و تزریق وابستگی ها


## 2. استفاده از توابع ترکیبی
API ترکیب به شما اجازه می دهد تا گروه هایی از ویژگی ها و توابع واکنشی را با سهولت ایجاد و استفاده مجدد کنید. به جای تعریف همه ویژگی های واکنشی و توابع داخل تابع Setup ، می توانید آنها را در یک تابع ترکیبی استخراج کنید و در هرجایی که نیاز است ، استفاده کنید.

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

سپس می توانید تابع useCounter را در تابع Setup خود استفاده کنید:

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

این به شما امکان می دهد کدهای خود را به توابع کوچک و قابل استفاده مجدد تقسیم کرده و تابع Setup خود را برای تنظیم کامپوننت تمرکز دهید.

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
