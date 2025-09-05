import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Banner configuration - modify this object to control banner visibility and content
    const bannerData = {
      isVisible: true, // Set to false to hide banner
      text: "",
      // You can add more fields as needed:
      // backgroundColor: "from-orange-600 to-orange-500",
      // link: "/events",
      // icon: "calendar"
    };

    // Return banner data
    return NextResponse.json(bannerData);
  } catch (error) {
    console.error('Banner API error:', error);
    return NextResponse.json({ isVisible: false, text: "" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Here you could save banner data to database
    // For now, just return success
    console.log('Banner data update:', body);
    
    return NextResponse.json({ success: true, message: 'Banner updated successfully' });
  } catch (error) {
    console.error('Banner update error:', error);
    return NextResponse.json({ success: false, message: 'Failed to update banner' }, { status: 500 });
  }
}