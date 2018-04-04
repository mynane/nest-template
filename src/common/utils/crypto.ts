import * as crypto from 'crypto';
import CONFIG from '../../../config';

export const encrypto = (cry) => {
    const str = JSON.stringify(cry);
    const cipher = crypto.createCipher('aes192', CONFIG.secretOrKey);
    let encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
}

export const decrypto = (cry) => {
    const decipher = crypto.createDecipher('aes192', CONFIG.secretOrKey);
    let decrypted = decipher.update(cry, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return JSON.parse(decrypted);
}
