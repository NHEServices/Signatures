export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!supabaseUrl || !supabasePublishableKey) {
    return res.status(500).json({ error: 'Missing public Supabase configuration' });
  }
  return res.status(200).json({ supabaseUrl, supabasePublishableKey });
}
