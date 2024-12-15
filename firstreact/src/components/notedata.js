import oceanpic from "./assets/beautifulocean.jpg";
import cardinalpic from "./assets/cardinal.jpg";
import goku from "./assets/goku.jpg";

export default [
    {
        img: oceanpic,
        date: "December 7th 2024",
        title: "Using .map to access data",
        type: "React",
        explanation: "In React, you often need to display data dynamically, and .map() makes it easy to iterate over an array and transform each item into a React component. This is especially useful when you need to render a list of items from dynamic data, like an API response or user input. For example, if you have an array of notes and you want to display each one in a separate component, you can use .map() to loop through that array and return a new list of components. It simplifies the code and keeps things modular, since each item can be rendered independently. Once I got the hang of it, I saw how .map() helps make my code more flexible and reusable.",
    },
    {
        img: cardinalpic,
        date: "December 7th 2024",
        title: "Props",
        type: "React",
        explanation: "In React, data flows from parent components to child components via props. It’s a way of making child components reusable by passing in different data each time they're used. For example, if you want to pass the title of a note to a Note component, you can use props to send that data down. It allows components to remain independent and focused on rendering their own content, while still being able to display dynamic data from a parent. Understanding props helped me keep my components clean and more organized, making it easier to build complex UIs.",
    },
    {
        img: goku,
        date: "December 8th 2024",
        title: "Tailwind unable to work even though installed?",
        type: "Tailwind/CSS",
        explanation: `Tailwind needs to be hooked up to your project properly so that it can add all the styles (like colors, margins, and more) when you use the classes in your HTML or JSX. If you’ve installed it but it’s not showing up, the issue might be that Tailwind isn't connected to your project’s build system yet. One thing that saved me from lots of trouble is simply plugging this code into my vite.config.js file.
        All it simply does is adds Tailwind as a plugin which in turn connects it to your CSS properly.`,
        code: `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
});
    `,
    file: "vite.config.js"
    }
    
];