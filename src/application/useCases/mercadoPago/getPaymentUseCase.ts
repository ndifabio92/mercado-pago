import { getPayment } from "../../../infrastructure/adapters/paymenstMercadoPagoAdapter";

export const getPaymentUseCase = async (id: number) => {
    try {
        const response = await getPayment(id);
        return response;
    } catch (error) {
        console.error('Error al obtener el pago en Mercado Pago (Use Case):', error);
        throw error;
    }
};
