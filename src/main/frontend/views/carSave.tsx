import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { Button } from '@vaadin/react-components/Button';

import CarItem from 'Frontend/generated/com/example/application/delegations/CarItem';
import { carEndpointApi } from 'Frontend/middleware/endpointsApi/delegationEnpointApi';

export const config: ViewConfig = {
  menu: { order: 1, icon: 'line-awesome/svg/car-side-solid.svg' },
  title: 'Cars',
};

const sampleCar: CarItem = {
  delegationId: 'DELEG#001',
  operation: 'carItem#2025#001',
  make: 'Toyota',
  model: 'Camry',
  year: 2025,
  color: 'Blue',
  rented: false,
  price: 40000,
};

export default function CarsView() {
  const handleSaveCar = async () => {
    try {
      await carEndpointApi.saveCar(sampleCar);
      alert('Car saved successfully!');
    } catch (error) {
      console.error('Error saving carItem:', error);
      alert('Failed to save carItem');
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>Car Management</h2>

      <div className="card p-m">
        <pre className="text-left">{JSON.stringify(sampleCar, null, 2)}</pre>
        <Button onClick={handleSaveCar}>Save Car</Button>
      </div>

      <p>It’s a place where you can grow your own UI 🤗</p>
    </div>
  );
}
