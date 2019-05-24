import { OnInit, EventEmitter } from '@angular/core';
import { _RaveOptions } from "./rave-options";
export declare class AngularRaveComponent implements OnInit {
    PBFPubKey: string;
    integrity_hash: string;
    txref: string;
    payment_method: string;
    amount: number;
    payment_plan: number;
    currency: string;
    country: string;
    customer_email: string;
    customer_phone: string;
    customer_firstname: string;
    customer_lastname: string;
    pay_button_text: string;
    custom_title: string;
    custom_description: string;
    redirect_url: string;
    custom_logo: string;
    meta: any;
    raveOptions: Partial<_RaveOptions>;
    onclose: EventEmitter<void>;
    callback: EventEmitter<Object>;
    private _raveOptions;
    constructor();
    pay(): void;
    insertRaveOptions(): void;
    validateOptions(): true | void;
    validateInput(): true | void;
    ngOnInit(): void;
}
