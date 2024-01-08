export interface Certificate {
  id: string
  name: string
  acquisitionDate: string
}

export interface CertificateResponseTypes {
  certifications: Certificate[]
}

export interface CertificateRequest extends Omit<Certificate, 'id'> {}
