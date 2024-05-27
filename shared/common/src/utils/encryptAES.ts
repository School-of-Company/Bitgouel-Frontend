import CryptoJS from 'crypto-js'

const encryptAES = (encryptValue: string) => {
  const iv = CryptoJS.lib.WordArray.random(128 / 8)
  const hashKey = CryptoJS.enc.Hex.parse(
    CryptoJS.SHA1(process.env.REACT_APP_SECRET_CRYPTO_KEY)
      .toString()
      .substring(0, 32)
  )
  const cipherStr = CryptoJS.AES.encrypt(encryptValue, hashKey, { iv })
  return iv.concat(cipherStr.ciphertext).toString()
}

export default encryptAES
