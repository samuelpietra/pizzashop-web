import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  email: string
  managerName: string
  phone: string
  restaurantName: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    email,
    managerName,
    phone,
    restaurantName,
  })
}
