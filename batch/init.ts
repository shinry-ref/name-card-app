import 'dotenv/config';
import { supabase } from "../src/utils/supabase.ts";

const DeleteAllUsers = async () => {
  const response = await supabase.from("users").delete().neq('id', 0);

  if (response.error) {
    throw new Error(response.error.message);
  } else {
    console.log('All users successfully deleted.');
  }
}

const DeleteAllUserSkill = async () => {
  const response = await supabase.from("user_skill").delete().neq('id', 0);

  if (response.error) {
    throw new Error(response.error.message);
  } else {
    console.log('All user skills successfully deleted.');
  }
}

const initTable = async () => {
  try {
    await DeleteAllUsers();
    await DeleteAllUserSkill();
    console.log('All tables initialized successfully.');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during initialization:', error.message);
    } else {
      console.error('An unknown error occurred during initialization.');
    }
  }
}

initTable();
