import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { Button } from '@vaadin/react-components/Button';

import BookingItem from 'Frontend/generated/com/example/application/users/BookingItem';
import { bookingEndpointApi } from 'Frontend/middleware/endpointsApi/userEndpointApi';

export const config: ViewConfig = { menu: { order: 2, icon: 'line-awesome/svg/list-ol-solid.svg' }, title: 'Bookings' };

export default function BookingsView() {
  const sampleBooking: BookingItem = {
    userId: 'USER#2024#001',
    operation: 'bookingItem#2025#001',
    status: 'ACTIVE',
    startDate: '2025-10-01',
    endDate: '2025-10-15',
    totalToPayment: 456.56,
    statusPayment: 'PENDING',
    statusBooking: 'ACTIVE',
    car: {
      delegationId: 'DELEG#001',
      operation: 'carItem#2025#001',
      make: 'Toyota',
      model: 'Camry',
      year: 2025,
      color: 'Blue',
      rented: false,
      price: 40000,
    },
    pickUpDelegation: {
      delegationId: 'DELEG#001',
      operation: 'profile',
      name: 'Barcelona Central',
      address: 'Carrer de la Marina, 15',
      city: 'Barcelona',
      availableCarQty: 12,
      phone: '+34 931 234 567',
      email: 'central@renting.com',
    },
    deliveryDelegation: {
      delegationId: 'DELEG#001',
      operation: 'profile',
      name: 'Barcelona Central',
      address: 'Carrer de la Marina, 15',
      city: 'Barcelona',
      availableCarQty: 12,
      phone: '+34 931 234 567',
      email: 'central@renting.com',
    },
  };

  const handleSaveBooking = async () => {
    try {
      await bookingEndpointApi.saveBooking(sampleBooking);
      alert('Booking saved successfully!');
    } catch (error) {
      console.error('Error saving userItem:', error);
      alert('Failed to save bookingItem');
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>Booking Management</h2>

      <div className="card p-m">
        <pre className="text-left">{JSON.stringify(sampleBooking, null, 2)}</pre>
        <Button onClick={handleSaveBooking}>Save Booking</Button>
      </div>

      <p>It’s a place where you can grow your own UI 🤗</p>
    </div>
  );
}
