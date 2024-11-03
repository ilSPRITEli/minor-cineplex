'use server';
import prisma from '@/lib/db';

export async function regNpass(data: any) {

//   let price = 0;
  const startDate = new Date();
  let endDate;

  switch (data.planType) {
    case 'weekly':
      endDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
      break;
    case 'monthly':
      endDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
      break;    
    case 'year':
      endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      break;
    default:
      throw new Error('Invalid plan type');
  }

  const result = await prisma.moviePassSubscription.create({
    data: {
      userId: 2,
      planType: data.planType,
      price: data.price,
      startDate,
      endDate,
    },
  });

  return result;
}
