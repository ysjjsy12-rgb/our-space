"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
export async function signIn(formData:FormData){const supabase=await createClient();const email=String(formData.get("email")??"");const password=String(formData.get("password")??"");const {error}=await supabase.auth.signInWithPassword({email,password});if(error)return {error:"이메일 또는 비밀번호를 확인해 주세요."};redirect("/app")}
export async function signUp(formData:FormData){const supabase=await createClient();const email=String(formData.get("email")??"");const password=String(formData.get("password")??"");const {error}=await supabase.auth.signUp({email,password});if(error)return {error:"계정을 만들지 못했어요. 잠시 후 다시 시도해 주세요."};redirect("/onboarding")}
export async function signOut(){const supabase=await createClient();await supabase.auth.signOut();redirect("/")}
