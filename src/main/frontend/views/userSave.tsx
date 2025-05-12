import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { Button } from '@vaadin/react-components/Button';

import UserItem from 'Frontend/generated/com/example/application/users/UserItem';
import { userEndpointApi } from 'Frontend/middleware/endpointsApi/userEndpointApi';

export const config: ViewConfig = {
  menu: { order: 3, icon: 'line-awesome/svg/users-cog-solid.svg' },
  title: 'Users',
};

const sampleUser: UserItem = {
  userId: 'USER#2024#001',
  operation: 'profile',
  username: 'jdoe',
  email: 'jdoe@example.com',
  fullName: 'John Doe',
  phone: '+34 600 123 456',
};

export default function UsersView() {
  const handleSaveUser = async () => {
    try {
      await userEndpointApi.saveUser(sampleUser);
      alert('User saved successfully!');
    } catch (error) {
      console.error('Error saving userItem:', error);
      alert('Failed to save userItem');
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>User Management</h2>

      <div className="card p-m">
        <pre className="text-left">{JSON.stringify(sampleUser, null, 2)}</pre>
        <Button onClick={handleSaveUser}>Save User</Button>
      </div>

      <p>Manage userItem accounts and profiles</p>
    </div>
  );
}
