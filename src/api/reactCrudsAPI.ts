import { iReactCruds } from "../types/types";
import { supabase } from "./supabaseClient";

export const fetchCruds = async (): Promise<iReactCruds[]> => {
  const { data, error } = await supabase
    .from("reactCruds")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

export const addCrud = async (
  title: string,
  description: string
): Promise<iReactCruds> => {
  const { data, error } = await supabase
    .from("reactCruds")
    .insert([{ title, description }])
    .select();
  if (error) throw error;
  return data[0];
};

export const deleteCrud = async (id: string) => {
  const { error } = await supabase.from("reactCruds").delete().eq("id", id);
  if (error) throw error;
};
