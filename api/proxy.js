export default async function handler(req, res) {
    const SUPABASE_URL = "https://xxwimfhkrlmbjatylmlo.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4d2ltZmhrcmxtYmphdHlsbWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNzU1ODcsImV4cCI6MjA1Mzc1MTU4N30.kXJwUrt38kReeCLyjEvZc6bFB8HbF8GoWZ3E0Mq3cJs"; // Replace this with your real anon key

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/page_views?select=*`, {
            headers: {
                "apikey": SUPABASE_KEY,
                "Authorization": `Bearer ${SUPABASE_KEY}`
            }
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
