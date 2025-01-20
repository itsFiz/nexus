// Location: /nexus/src/app/api/applications/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { validateApiKey } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    // Validate API key
    const apiKey = request.headers.get('Authorization')?.split(' ')[1];
    if (!validateApiKey(apiKey)) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401 }
      );
    }

    const data = await request.json();

    // Create candidate record
    const candidate = await prisma.candidate.create({
      data: {
        firstName: data.fullName.split(' ')[0],
        lastName: data.fullName.split(' ').slice(1).join(' '),
        email: data.email,
        phone: data.phone,
        location: data.location,
        role: data.position,
        department: data.department,
        status: 'New',
        source: 'Career Website',
        resumeUrl: data.cvUrl,
        portfolioUrl: data.portfolioUrl,
        githubUrl: data.githubUrl,
        linkedinUrl: data.linkedinUrl,
        personalWebsite: data.personalWebsite,
        coverLetter: data.coverLetter,
        appliedDate: new Date(),
      }
    });

    // Create notification
    await prisma.notification.create({
      data: {
        type: 'NEW_APPLICATION',
        title: `New application for ${data.position}`,
        content: `${data.fullName} applied for ${data.position} position`,
        candidateId: candidate.id,
        isRead: false
      }
    });

    return NextResponse.json({ 
      success: true, 
      candidateId: candidate.id 
    });
  } catch (error) {
    console.error('Application submission failed:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}