import { iReactCruds } from "../types/types";
import { supabase } from "./supabaseClient";

export const fetchCruds = async (): Promise<iReactCruds[]> => {
  const { data, error } = await supabase
    .from("contents")
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
    .from("contents")
    .insert([
      {
        title,
        description,
        created_at: new Date().toISOString().replace("T", " ").slice(0, -1),
      },
    ])
    .select();

  if (error) throw error;
  return data[0];
};

export const updateCrud = async (
  id: string,
  title: string,
  description: string
): Promise<iReactCruds> => {
  const { data, error } = await supabase
    .from("contents")
    .update({ title, description })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteCrud = async (id: string) => {
  const { error } = await supabase.from("contents").delete().eq("id", id);
  if (error) throw error;
};
