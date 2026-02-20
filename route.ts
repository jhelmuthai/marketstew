import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2');

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await response.json();

    // Brevo returns "duplicate_parameter" if already subscribed — still a success
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, existing: true });
    }

    console.error('Brevo error:', data);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
