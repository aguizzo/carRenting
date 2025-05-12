import UserItem from 'Frontend/generated/com/example/application/users/UserItem';
import BookingItem from 'Frontend/generated/com/example/application/users/BookingItem';
import { UserEndpoint } from 'Frontend/generated/endpoints';

interface UserEndpointApi {
  saveUser: (userItem: UserItem) => Promise<void>;
}

interface BookingEndpointApi {
  saveBooking: (bookingItem: BookingItem) => Promise<void>;
}

const userEndpointApi: UserEndpointApi = {
  saveUser: async (userItem: UserItem) => {
    try {
      await UserEndpoint.saveUser(userItem);
    } catch (error) {
      console.error('UserEndpointApi -- Failed to save a userItem:', error);
    }
  },
};

const bookingEndpointApi: BookingEndpointApi = {
  saveBooking: async (bookingItem: BookingItem) => {
    try {
      await UserEndpoint.saveBooking(bookingItem);
    } catch (error) {
      console.error('BookingEndpointApi -- Failed to save a bookingItem', error);
    }
  },
};

export { userEndpointApi, bookingEndpointApi };
