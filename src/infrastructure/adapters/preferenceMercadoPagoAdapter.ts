import { MercadoPagoConfig, Preference } from 'mercadopago';
import { envs } from '../config/envs';
import { ItemDto } from '../../domain/Dtos/itemDto';
import { ResponsePreferenseDto } from '../../domain/Dtos/responsePreferenseDto';

const client = new MercadoPagoConfig({ accessToken: envs.mercadoPagoAccessToken });

const preferenceMercadoPagoAdapter = async (items: ItemDto[]): Promise<ResponsePreferenseDto> => {
    const preference = new Preference(client);
    try {
        const response = await preference.create({
            body: {
                items,
                back_urls: {
                    success: envs.backUrlSuccess,
                    pending: envs.backUrlPending,
                    failure: envs.backUrlFailure
                },
                auto_return: 'approved',
            },
        });
        return response;

    } catch (error) {
        console.error('Error al crear la preferencia en Mercado Pago (Adapter):', error);
        throw error;
    }
};

export default preferenceMercadoPagoAdapter;