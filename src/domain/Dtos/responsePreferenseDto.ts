export interface ResponsePreferenseDto {
    additional_info?: string | undefined;
    auto_return?: string | undefined;
    back_urls?: Urls | undefined;
    binary_mode?: boolean | undefined;
    client_id?: string | undefined;
    collector_id?: number | undefined;
    coupon_code?: string | undefined;
    coupon_labels?: string[] | undefined;
    date_created?: string | undefined;
    date_of_expiration?: string | undefined;
    expiration_date_from?: string | undefined;
    expiration_date_to?: string | undefined;
    expires?: boolean | undefined;
    external_reference?: string | undefined;
    id?: string | undefined;
    init_point?: string | undefined;
    internal_metadata?: null;
    items?: Item[] | undefined;
    marketplace?: string | undefined;
    marketplace_fee?: number | undefined;
    metadata?: Metadata | undefined;
    notification_url?: string | undefined;
    operation_type?: string | undefined;
    payer?: Payer | undefined;
    payment_methods?: PaymentMethods | undefined;
    processing_modes?: string[] | undefined;
    product_id?: null;
    redirect_urls?: Urls | undefined;
    sandbox_init_point?: string | undefined;
    site_id?: string | undefined;
    shipments?: Shipments | undefined;
    total_amount?: number | null;
    last_updated?: null;
    financing_group?: string;
    api_response: APIResponse;
}

export interface APIResponse {
    status: number;
    headers: [string, string[]];
}

export interface Urls {
    failure?: string | undefined;
    pending?: string | undefined;
    success?: string | undefined;
}

export interface Item {
    id?: string | undefined;
    category_id?: string | undefined;
    currency_id?: string | undefined;
    description?: string | undefined;
    title?: string | undefined;
    quantity?: number | undefined;
    unit_price?: number | undefined;
}

export interface Metadata {
}

export interface Payer {
    phone?: Phone | undefined;
    address?: Address | undefined;
    email?: string | undefined;
    identification?: Identification | undefined;
    name?: string | undefined;
    surname?: string | undefined;
    date_created?: string | undefined;
    last_purchase?: string | undefined;
}

export interface Address {
    zip_code?: string | undefined;
    street_name?: string | undefined;
    street_number?: string | undefined;
}

export interface Identification {
    number?: string | undefined;
    type?: string | undefined;
}

export interface Phone {
    area_code?: string | undefined;
    number?: string | undefined;
}

export interface PaymentMethods {
    default_card_id?: string | undefined;
    default_payment_method_id?: string | undefined;
    excluded_payment_methods?: ExcludedPayment[] | undefined;
    excluded_payment_types?: ExcludedPayment[] | undefined;
    installments?: number | undefined;
    default_installments?: number | undefined;
}

export interface ExcludedPayment {
    id?: string | undefined;
}

export interface Shipments {
    default_shipping_method?: number | undefined;
    receiver_address?: ReceiverAddress | undefined;
}

export interface ReceiverAddress {
    zip_code?: string | undefined;
    street_name?: string | undefined;
    street_number?: number | undefined;
    floor?: string | undefined;
    apartment?: string | undefined;
    city_name?: string | undefined;
    state_name?: string | undefined;
    country_name?: string | undefined;
}
