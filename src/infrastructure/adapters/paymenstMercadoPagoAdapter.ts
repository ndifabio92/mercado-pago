import { MercadoPagoConfig, Payment } from 'mercadopago';
import { envs } from '../config/envs';
import { PaymentResponse } from 'mercadopago/dist/clients/payment/commonTypes';

const client = new MercadoPagoConfig({ accessToken: envs.mercadoPagoAccessToken });

export const getPayment = async (paymentId: number): Promise<PaymentResponse> => {
    try {
        const payment = new Payment(client);
        const response = await payment.get({ id: paymentId });
        return response;
    } catch (error) {
        console.error('Error al obtener el pago de Mercado Pago (Adapter):', error);
        throw error;
    }
};