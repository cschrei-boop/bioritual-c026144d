import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const KLAVIYO_API_KEY = Deno.env.get('KLAVIYO_PRIVATE_API_KEY');
    if (!KLAVIYO_API_KEY) {
      throw new Error('KLAVIYO_PRIVATE_API_KEY is not configured');
    }

    const { email, interests } = await req.json();

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Subscribe profile to Klaviyo list via the Subscribe Profiles API
    // First, create/update the profile
    const profileRes = await fetch('https://a.klaviyo.com/api/profile-import/', {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'Content-Type': 'application/json',
        'revision': '2024-10-15',
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email: email.trim(),
            properties: {
              source: 'jesse-waitlist',
              interests: interests || [],
            },
          },
        },
      }),
    });

    if (!profileRes.ok) {
      const errorBody = await profileRes.text();
      console.error(`Klaviyo API error [${profileRes.status}]:`, errorBody);
      throw new Error(`Klaviyo API call failed [${profileRes.status}]: ${errorBody}`);
    }

    await profileRes.text();

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error in klaviyo-subscribe:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
