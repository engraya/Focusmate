"use client";
import Tasks from "../Components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";

export default function TasksPage() {
  const { tasks } = useGlobalState();

  return <Tasks title="Tasks" tasks={tasks} />;
}
