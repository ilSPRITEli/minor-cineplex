'use server';
import prisma from '@/lib/db';

export async function regNpass(data: any) {

  let price = 0;
  const startDate = new Date();
  let endDate;

  switch (data.planType) {
    case 'weekly':
      price = 5;
      endDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
      break;
    case 'monthly':
      price = 10;
      endDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
      break;    
    case 'annual':
      price = 100;
      endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      break;
    default:
      throw new Error('Invalid plan type');
  }

  const result = await prisma.moviePassSubscription.create({
    data: {
      userId: Number(data.userId),
      planType: data.planType,
      price,
      startDate,
      endDate,
    },
  });

  return result;
}
