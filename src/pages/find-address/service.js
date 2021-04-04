import { viaCEPApi } from '~/services/api';

export default class ServiceFindAddress {

   async getAddress(cep) {
      cep = cep.replace(/[^\d]/g, '');
      const response = await viaCEPApi.get(`/${cep}/json`);
      return response.data;
   }

}