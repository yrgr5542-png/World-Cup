import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Match = {
  id: number
  team_a: string
  team_b: string
  team_a_flag: string
  team_b_flag: string
  stage: 'r32' | 'r16' | 'qf' | 'sf' | 'third' | 'final'
  group_name?: string
  match_number: number
  kickoff_time: string
  result_a?: number | null
  result_b?: number | null
  winner?: string | null
  penalty_winner?: string | null
  status: 'upcoming' | 'locked' | 'finished'
}

export type Prediction = {
  id: number
  user_id: string
  match_id: number
  pred_a: number
  pred_b: number
  pred_winner?: string | null
  points_earned?: number | null
  was_changed?: boolean
  created_at: string
  updated_at?: string
}

export type Profile = {
  id: string
  username: string
  total_points: number
  created_at: string
}
