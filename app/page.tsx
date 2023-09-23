"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import Item from "@/components/Item"; // Import Item component individually
import Form from "@/components/Form"; // Import Form component

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]); // Initialize tasks as an array

  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Add a new task to the tasks array
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-5 bg-[url('https://wallpapercave.com/wp/wp10054802.jpg')] bg-cover bg-fixed bg-center">
      <h1 className="sm:text-5xl text-3xl text-slate-600 mb-3 sm:mb-5 font-serif font-extrabold">
        TODO LIST
      </h1>
      <Form addTask={addTask} />
      <Container>
        {tasks.map((task, index) => (
          <Item
            key={index}
            className="text-slate-600 hover:text-slate-800"
            task={task}
          />
        ))}
      </Container>
    </main>
  );
}
