
import { Request, Response } from 'express';
import { createPreferenseUseCase } from '../../application/useCases/mercadoPago/createPreferenseUseCase';
import { getPaymentUseCase } from '../../application/useCases/mercadoPago/getPaymentUseCase';
import { httpResponse } from '../../infrastructure/utils/httpResponse';

export const createPreference = async (req: Request, res: Response) => {
    try {
        const items = req.body.items;
        const response = await createPreferenseUseCase(items);
        httpResponse.success(res, response, 'Preferencia creada correctamente');
    } catch (error) {
        httpResponse.internalServer(res, error as string, 'Error al crear la preferencia');
    }
};

export const getPayment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getPaymentUseCase(Number(id));
        httpResponse.success(res, response, 'Pago obtenido correctamente');
    } catch (error) {
        httpResponse.internalServer(res, error as string, 'Error al obtener el pago');
    }
};