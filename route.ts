import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const body = {
      email: email,
      listIds: [2],
      updateEnabled: true,
    };

    console.log('Sending to Brevo:', JSON.stringify(body));

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('Brevo response:', response.status, JSON.stringify(data));

    if (response.ok || response.status === 201) {
      return NextResponse.json({ success: true });
    }

    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, existing: true });
    }

    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
