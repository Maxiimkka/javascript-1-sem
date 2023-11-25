const crypto = require('crypto');

// Генерация ключей RSA
const { publicKey: publicKeyRSA, privateKey: privateKeyRSA } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Генерация ключей Диффи-Хеллмана
const diffieHellman = crypto.createDiffieHellman(2048);
const publicKeyDH = diffieHellman.generateKeys();
const privateKeyDH = diffieHellman.getPrivateKey();

// Генерация ключей Эль-Гамаля
const { publicKey: publicKeyElGamal, privateKey: privateKeyElGamal } = crypto.generateKeyPairSync('ec', {
  namedCurve: 'secp256k1',
});

const name = 'Krivenchuk Maxim';

// Вывод открытых и закрытых ключей RSA
console.log('RSA Public Key:', publicKeyRSA.export({ type: 'spki', format: 'pem' }));
console.log('RSA Private Key:', privateKeyRSA.export({ type: 'pkcs8', format: 'pem' }));

// Вывод открытых и закрытых ключей Диффи-Хеллмана
console.log('Diffie-Hellman Public Key:', publicKeyDH.toString('hex'));
console.log('Diffie-Hellman Private Key:', privateKeyDH.toString('hex'));

// Вывод открытых и закрытых ключей Эль-Гамаля
console.log('ElGamal Public Key:', publicKeyElGamal.export({ type: 'spki', format: 'pem' }));
console.log('ElGamal Private Key:', privateKeyElGamal.export({ type: 'pkcs8', format: 'pem' }));

// Шифрование ФИО с помощью RSA
const encryptedNameRSA = crypto.publicEncrypt(
  {
    key: publicKeyRSA,
    padding: crypto.constants.RSA_PKCS1_PADDING,
  },
  Buffer.from(name)
);

// Обмен ключами Диффи-Хеллмана
diffieHellman.setPrivateKey(privateKeyDH); // Установка приватного ключа
const sharedSecretDH = diffieHellman.computeSecret(publicKeyDH);

// Шифрование ФИО с помощью Диффи-Хеллмана
const encryptedNameDH = crypto.createDiffieHellman(2048)
  .setPrivateKey(privateKeyDH)
  .computeSecret(publicKeyDH)
  .toString('hex');

// Шифрование ФИО с помощью Эль-Гамаля
const encryptedNameElGamal = crypto.publicEncrypt(
  {
    key: publicKeyElGamal,
    padding: crypto.constants.OAEP_PADDING,
  },
  Buffer.from(name)
);

// Пример использования зашифрованных данных
console.log('Encrypted Name (RSA):', encryptedNameRSA.toString('hex'));
console.log('Encrypted Name (Diffie-Hellman):', encryptedNameDH);
console.log('Encrypted Name (ElGamal):', encryptedNameElGamal.toString('hex'));

// Вывод общего секретного ключа Диффи-Хеллмана
console.log('Shared Secret (Diffie-Hellman):', sharedSecretDH.toString('hex')); 