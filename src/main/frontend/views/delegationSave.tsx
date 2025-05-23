import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { Button } from '@vaadin/react-components/Button';

import DelegationItem from 'Frontend/generated/com/example/application/delegations/DelegationItem';
import { delegationEndpointApi } from 'Frontend/middleware/endpointsApi/delegationEnpointApi';

export const config: ViewConfig = {
  menu: { order: 4, icon: 'line-awesome/svg/simplybuilt.svg' },
  title: 'Delegations',
};

const sampleDelegation: DelegationItem = {
  delegationId: 'DELEG#001',
  operation: 'profile',
  name: 'Barcelona Central',
  address: 'Carrer de la Marina, 15',
  city: 'Barcelona',
  availableCarQty: 12,
  phone: '+34 931 234 567',
  email: 'central@renting.com',
};

export default function DelegationView() {
  const handleSaveDelegation = async () => {
    try {
      await delegationEndpointApi.saveDelegation(sampleDelegation);
      alert('Delegation saved successfully!');
    } catch (error) {
      console.error('Error saving delegationItem:', error);
      alert('Failed to save delegationItem');
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>Delegation Management</h2>

      <div className="card p-m">
        <pre className="text-left">{JSON.stringify(sampleDelegation, null, 2)}</pre>
        <Button onClick={handleSaveDelegation}>Save Delegation</Button>
      </div>

      <p>Manage business trip delegations and approvals</p>
    </div>
  );
}
