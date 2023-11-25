// Библиотека для работы с криптографией
const crypto = require('crypto');
// Генерация ключей RSA
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});
// Функция для создания ЭЦП
function createDigitalSignature(message, privateKey) {
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(message);
  const signature = signer.sign(privateKey, 'base64');
  return signature;
}
// Функция для проверки ЭЦП
function verifyDigitalSignature(message, signature, publicKey) {
  const verifier = crypto.createVerify('RSA-SHA256');
  verifier.update(message);
  const isVerified = verifier.verify(publicKey, signature, 'base64');
  return isVerified;
}
const message = 'Krivenchuk Maxim';
// Создание ЭЦП
const signature = createDigitalSignature(message, privateKey);
console.log('Созданная ЭЦП:', signature);
// Проверка ЭЦП
const isVerified = verifyDigitalSignature(message, signature, publicKey);
console.log('Проверка ЭЦП:', isVerified);