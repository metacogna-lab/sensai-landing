import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, decision } = await req.json();
    
    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;

    if (!portalId || !formId) {
      console.warn('HubSpot environment variables not configured. Returning success for demo purposes.');
      return NextResponse.json({ success: true, warning: 'HubSpot not configured' });
    }

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    const response = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          { name: 'email', value: email },
          { name: 'firstname', value: name },
          { name: 'message', value: decision || '' }, 
        ],
        context: {
          pageUri: 'https://sensaistudio.com/',
          pageName: 'Sensai Studio Landing Page',
        },
      }),
    });

    if (!response.ok) {
      console.error('HubSpot submission failed', await response.text());
      return NextResponse.json({ error: 'Failed to submit to HubSpot' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
