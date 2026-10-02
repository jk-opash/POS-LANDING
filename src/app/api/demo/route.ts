import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate basic required fields
    if (!data.name || !data.email || !data.phone || !data.city || !data.business) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically integrate with a CRM (HubSpot, Salesforce, etc.)
    // or send an email via SendGrid/Resend. For now, we simulate a delay.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('New Demo Request Received:', data);

    return NextResponse.json(
      { success: true, message: 'Demo request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
