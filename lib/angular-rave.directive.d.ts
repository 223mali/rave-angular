import { EventEmitter } from '@angular/core';
import { PrivateRaveOptions } from './rave-options';
export declare class AngularRaveDirective {
    PBFPubKey: string;
    integrity_hash: string;
    txref: string;
    payment_method: string;
    amount: number;
    currency: string;
    country: string;
    payment_plan: number;
    customer_email: string;
    customer_phone: string;
    customer_firstname: string;
    customer_lastname: string;
    pay_button_text: string;
    custom_title: string;
    subaccount: {
        id: string;
        transaction_split_ratio: string;
    }[];
    custom_description: string;
    redirect_url: string;
    custom_logo: string;
    meta: any;
    raveOptions: Partial<PrivateRaveOptions>;
    onclose: EventEmitter<void>;
    callback: EventEmitter<any>;
    init: EventEmitter<Object>;
    private _raveOptions;
    private paymentSetup;
    constructor();
    buttonClick(): void;
    pay(): Promise<void>;
    insertRaveOptions(): void;
    validateOptions(): true | void;
    loadScript(): Promise<void>;
    validateInput(): true | void;
}
