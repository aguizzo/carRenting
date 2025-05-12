import CarItem from 'Frontend/generated/com/example/application/delegations/CarItem';
import DelegationItem from 'Frontend/generated/com/example/application/delegations/DelegationItem';
import { DelegationEndpoint } from 'Frontend/generated/endpoints';

interface DelegationEndpointApi {
  saveDelegation: (delegationItem: DelegationItem) => Promise<void>;
}

interface CarEndpointApi {
  saveCar: (carItem: CarItem) => Promise<void>;
}

const delegationEndpointApi: DelegationEndpointApi = {
  saveDelegation: async (delegationItem: DelegationItem) => {
    try {
      await DelegationEndpoint.saveDelegation(delegationItem);
    } catch (error) {
      console.error('DelegationEndpoitApi -- Failed to save a delegationItem', error);
    }
  },
};

const carEndpointApi: CarEndpointApi = {
  saveCar: async (carItem: CarItem) => {
    try {
      await DelegationEndpoint.saveCar(carItem);
    } catch (error) {
      console.error('CarEndpointApi -- Failed to save a carItem:', error);
    }
  },
};

export { delegationEndpointApi, carEndpointApi };
