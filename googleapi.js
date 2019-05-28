
 var alexander = document.getElementById("alexander").value;
 var benjamint = document.getElementById("Benjamin t").value;
 var benjaminn = document.getElementById("Benjamin N").value;
 var bjørg = document.getElementById("Bjørg").value;
 var casper = document.getElementById("Casper").value;
 var kvist = document.getElementById("kvist").value;
 var hampus = document.getElementById("Hampus").value;
 var kristoffer = document.getElementById("Kristoffer").value;
 var mhansen = document.getElementById("M Hansen").value;
 var mads = document.getElementById("Mads").value;
 var magnus = document.getElementById("Magnus").value;
 var marc = document.getElementById("Marc").value;
 var marinus = document.getElementById("Marinus").value;
 var mia = document.getElementById("Mia").value;
 var natasja = document.getElementById("Natasja").value;
 var nikolaj = document.getElementById("Nikolaj").value;
 var oliver = document.getElementById("Oliver").value;
 var sara = document.getElementById("Sara").value;
 var victor = document.getElementById("Victor").value;
 var william = document.getElementById("William").value;
 var rektor = document.getElementById("rektor").value;
 var nacho = document.getElementById("nacho").value;

 var price = ( parseFloat(alexander) + parseFloat(benjamint) + parseFloat(benjaminn) + parseFloat(bjørg) + parseFloat(casper) + parseFloat(kvist) + parseFloat(hampus) + parseFloat(kristoffer) + parseFloat(mhansen) + parseFloat(mads) + parseFloat(magnus) + parseFloat(marc) + parseFloat(marinus) + parseFloat(mia) + parseFloat(natasja) + parseFloat(nikolaj) + parseFloat(oliver) + parseFloat(sara) + parseFloat(victor) + parseFloat(william) + parseFloat(rektor) + parseFloat(nacho))*10;


const baseRequest = {
  apiVersion: 2,
  apiVersionMinor: 0
};


const allowedCardNetworks = ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"];

const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

const tokenizationSpecification = {
  type: 'PAYMENT_GATEWAY',
  parameters: {
    'gateway': '2152-9202-7627',
    'gatewayMerchantId': 'Slots Bet'
  }
};

const baseCardPaymentMethod = {
  type: 'CARD',
  parameters: {
    allowedAuthMethods: allowedCardAuthMethods,
    allowedCardNetworks: allowedCardNetworks
  }
};


const cardPaymentMethod = Object.assign(
  {},
  baseCardPaymentMethod,
  {
    tokenizationSpecification: tokenizationSpecification
  }
);


function getGoogleIsReadyToPayRequest() {
  return Object.assign(
      {},
      baseRequest,
      {
        allowedPaymentMethods: [baseCardPaymentMethod]
      }
  );
}


function getGooglePaymentDataRequest() {
  const paymentDataRequest = Object.assign({}, baseRequest);
  paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
  paymentDataRequest.transactionInfo = getGoogleTransactionInfo();
  paymentDataRequest.merchantInfo = {
    // @todo a merchant ID is available for a production environment after approval by Google
    // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
    // merchantId: '01234567890123456789',
    merchantName: 'SlotsBet'
  };
  return paymentDataRequest;
}


function getGooglePaymentsClient() {
  if ( paymentsClient === null ) {
    paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});
  }
  return paymentsClient;
}


function onGooglePayLoaded() {
  const paymentsClient = getGooglePaymentsClient();
  paymentsClient.isReadyToPay(getGoogleIsReadyToPayRequest())
      .then(function(response) {
        if (response.result) {
          addGooglePayButton();
          // @todo prefetch payment data to improve performance after confirming site functionality
          // prefetchGooglePaymentData();
        }
      })
      .catch(function(err) {
        // show error in developer console for debugging
        console.error(err);
      });
}


function addGooglePayButton() {
  const paymentsClient = getGooglePaymentsClient();
  const button =
      paymentsClient.createButton({onClick: onGooglePaymentButtonClicked});
  document.getElementById('container').appendChild(button);
}


function getGoogleTransactionInfo() {
  return {
    currencyCode: 'DKK',
    totalPriceStatus: 'FINAL',
    // set to cart total
    totalPrice: price
  };
}


function prefetchGooglePaymentData() {
  const paymentDataRequest = getGooglePaymentDataRequest();
  // transactionInfo must be set but does not affect cache
  paymentDataRequest.transactionInfo = {
    totalPriceStatus: price,
    currencyCode: 'DKK'
  };
  const paymentsClient = getGooglePaymentsClient();
  paymentsClient.prefetchPaymentData(paymentDataRequest);
}


function onGooglePaymentButtonClicked() {
  const paymentDataRequest = getGooglePaymentDataRequest();
  paymentDataRequest.transactionInfo = getGoogleTransactionInfo();

  const paymentsClient = getGooglePaymentsClient();
  paymentsClient.loadPaymentData(paymentDataRequest)
      .then(function(paymentData) {
        // handle the response
        processPayment(paymentData);
      })
      .catch(function(err) {
        // show error in developer console for debugging
        console.error(err);
      });
}


function processPayment(paymentData) {
  // show returned data in developer console for debugging
    console.log(paymentData);
  // @todo pass payment token to your gateway to process payment
  paymentToken = paymentData.paymentMethodData.tokenizationData.token;
}