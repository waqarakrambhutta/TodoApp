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
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-5 bg-slate-700">
      <h1 className="sm:text-5xl text-3xl text-white mb-3 sm:mb-5 font-serif font-extrabold">
        TODO LIST
      </h1>
      <Form addTask={addTask} />
      {tasks && (
        <Container>
          {tasks.map(
            (task, index) =>
              task && (
                <Item
                  key={index}
                  className="text-slate-100 hover:text-slate-200"
                  task={task}
                />
              )
          )}
        </Container>
      )}
    </main>
  );
}
