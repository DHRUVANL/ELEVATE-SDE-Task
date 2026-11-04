export type Status = 'Pending' | 'Approved' | 'Rejected'
export type CertificateStatus = 'Valid' | 'Revoked'
export interface Application { id:string; name:string; phone:string; gender:string; city:string; state:string; status:Status; submittedAt:string }
export interface Certificate { id:string; applicationId:string; name:string; phone:string; city:string; state:string; issuedAt:string; status:CertificateStatus }
