import React, { useState, useMemo, useCallback } from 'react';
import { useUpdateEffect } from 'ahooks';
import { useExternal } from 'ahooks';

/**
 * 加载Google Pay支付的hoooks
 */
function useGooglePayLoad() {
	const status = useExternal('https://pay.google.com/gp/p/js/pay.js', {
		js: {
			async: true
		}
	});
	const loaded = React.useMemo(() => status === 'ready', [status]);

	return loaded;
}

/**
 * 支持Google Pay支付的hoooks
 */
function useGooglePaySupport(paymentsClient: google.payments.api.PaymentsClient | null, isReadyToPayRequest: google.payments.api.IsReadyToPayRequest) {
	const [support, setSupport] = useState(false);

	useUpdateEffect(() => {
		if (paymentsClient) {
			paymentsClient.isReadyToPay(isReadyToPayRequest).then(function (response: google.payments.api.IsReadyToPayResponse) {
				if (response.result) {
					// add a Google Pay payment button
					setSupport(true);
				}
			});
		}
	}, [paymentsClient, isReadyToPayRequest]);

	return support;
}

const baseRequest = {
	apiVersion: 2,
	apiVersionMinor: 0
};

const tokenizationSpecification = {
	type: 'PAYMENT_GATEWAY',
	parameters: {
		gateway: 'authorizenet',
		gatewayMerchantId: '877204'
	}
};

const allowedCardNetworks = ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];
const baseCardPaymentMethod = {
	type: 'CARD',
	parameters: {
		allowedAuthMethods: allowedCardAuthMethods,
		allowedCardNetworks: allowedCardNetworks
	}
};

const cardPaymentMethod = Object.assign(
	{ tokenizationSpecification: tokenizationSpecification },
	baseCardPaymentMethod
);
const isReadyToPayRequest = Object.assign({}, baseRequest);
isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

const paymentDataRequest = Object.assign({}, baseRequest);
paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];

paymentDataRequest.merchantInfo = {
	merchantName: 'Link Mobile Medical Solution Inc.',
	merchantId: 'BCR2DN4T26OMDRC4'
};

function useGooglgePaySupportAll() {
	const status = useGooglePayLoad();
	const paymentsClient = useMemo(() => {
		if (status) {
			return new google.payments.api.PaymentsClient({ environment: import.meta.env.VITE_GOOGLE_PAY_ENV });
		}
	}, [status]);

	const support = useGooglePaySupport(paymentsClient, isReadyToPayRequest);

	return [support, paymentsClient];
}

/**
 * 支持Google Pay支付的hoooks
 */
function useGooglPay({ billAmount }) {
	const [support, paymentsClient] = useGooglgePaySupportAll();

	paymentDataRequest.transactionInfo = useMemo(() => {
		if (billAmount) {
			return {
				totalPriceStatus: 'FINAL',
				totalPrice: `${billAmount}`,
				currencyCode: 'USD',
				countryCode: 'US'
			};
		}
	}, [billAmount]);

	const googlePay = useCallback(() => {
		return paymentsClient
			.loadPaymentData(paymentDataRequest)
			.then(async function (paymentData) {
				// if using gateway tokenization, pass this token without modification
				const paymentToken = paymentData.paymentMethodData.tokenizationData.token;

				const env = window.btoa(paymentToken);

				return env;
			})
			.catch(function (err) {
				// show error in developer console for debugging
				console.error(err);
			});
	}, [paymentsClient]);

	return [support, googlePay];
}

export { useGooglPay, useGooglgePaySupportAll };
