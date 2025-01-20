// prisma/seed.ts
import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    // Clear existing data
    await prisma.session.deleteMany();
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();

    // Create test users
    const users = [
      {
        email: 'founder@nexzgen.com',
        name: 'Hafiz Kadir',
        role: UserRole.FOUNDER,
        profile: {
          department: 'Executive',
          position: 'Founder & CEO',
          avatar: null,
          bio: 'Technical visionary with expertise in AR/VR and AI'
        }
      },
      {
        email: 'tech@nexzgen.com',
        name: 'Tech Lead',
        role: UserRole.TECH_LEAD,
        profile: {
          department: 'Engineering',
          position: 'Technical Lead',
          avatar: null,
          bio: 'Full-stack developer with expertise in Next.js and Cloud Architecture'
        }
      },
      {
        email: 'developer@nexzgen.com',
        name: 'Developer',
        role: UserRole.DEVELOPER,
        profile: {
          department: 'Engineering',
          position: 'Software Developer',
          avatar: null,
          bio: 'Frontend specialist focusing on React and TypeScript'
        }
      },
      {
        email: 'analyst@nexzgen.com',
        name: 'Data Analyst',
        role: UserRole.ANALYST,
        profile: {
          department: 'Analytics',
          position: 'Data Analyst',
          avatar: null,
          bio: 'Data specialist with focus on business intelligence'
        }
      }
    ];

    // Default password for all test users
    const defaultPassword = await bcrypt.hash("Password123!", 12);

    // Create users with their profiles
    for (const userData of users) {
      const { profile, ...userInfo } = userData;
      const user = await prisma.user.create({
        data: {
          ...userInfo,
          password: defaultPassword,
          profile: {
            create: profile
          }
        }
      });
      console.log(`Created user: ${user.email} with role ${user.role}`);
    }

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });