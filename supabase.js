// Linki güncelledik (Daha kararlı sürüm)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm';

// KENDİ PROJE URL VE KEY BİLGİLERİNİ BURAYA TEKRAR YAPIŞTIR
const supabaseUrl = 'https://yiwkdayjfmwaqhtapcxz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpd2tkYXlqZm13YXFodGFwY3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NTMxNTgsImV4cCI6MjA4MTIyOTE1OH0.a3EX7pf7cIWk8RMiJlKuraKZvYo7AVcyIMRqdJ622yY';

export const supabase = createClient(supabaseUrl, supabaseKey);