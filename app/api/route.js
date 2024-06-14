import { ConnectDB } from "@/lib/config/db";
import ToDoModel from "@/lib/models/ToDoModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();
export async function GET(request) {
  const todos = await ToDoModel.find({});
  return NextResponse.json({
    todos: todos,
  });
}
export async function POST(request) {
  const { title, description, isCompleted } = await request.json();
  await ToDoModel.create({
    title,
    description,
    isCompleted: isCompleted || false,
  });
  return NextResponse.json({
    msg: "Task Created",
  });
}
export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await ToDoModel.findByIdAndDelete(mongoId);
  return NextResponse.json({
    msg: "Task Deleted",
  });
}

export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await ToDoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({
    msg: "Task Done",
  });
}
