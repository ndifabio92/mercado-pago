import { ItemDto } from '../../../domain/Dtos/itemDto';
import preferenceMercadoPagoAdapter from '../../../infrastructure/adapters/preferenceMercadoPagoAdapter';

export const createPreferenseUseCase = async (items: ItemDto[]) => {
    try {
        const response = await preferenceMercadoPagoAdapter(items);
        return response;
    } catch (error) {
        console.error('Error al crear la preferencia en Mercado Pago (Use Case):', error);
        throw error;
    }
};
