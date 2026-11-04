import type { Application, Certificate } from './types'
export const STATES = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry']
export const seedApplications:Application[] = [
 {id:'APP-0001',name:'Ananya Rao',phone:'9876543210',gender:'Female',city:'Bengaluru',state:'Karnataka',status:'Pending',submittedAt:'2026-10-28T10:30:00.000Z'},
 {id:'APP-0002',name:'Arjun Mehta',phone:'9876501234',gender:'Male',city:'Mysuru',state:'Karnataka',status:'Approved',submittedAt:'2026-10-29T08:15:00.000Z'},
 {id:'APP-0003',name:'Meera Nair',phone:'9988776655',gender:'Female',city:'Kochi',state:'Kerala',status:'Rejected',submittedAt:'2026-10-30T12:00:00.000Z'}
]
export const seedCertificates:Certificate[] = [
 {id:'CERT-2026-0001',applicationId:'APP-0002',name:'Arjun Mehta',phone:'9876501234',city:'Mysuru',state:'Karnataka',issuedAt:'2026-10-30T09:00:00.000Z',status:'Valid'}
]
const read=<T,>(key:string,fallback:T):T=>{try{const value=localStorage.getItem(key);return value?JSON.parse(value) as T:fallback}catch{return fallback}}
export const getApplications=()=>read<Application[]>('credvault_applications',seedApplications)
export const getCertificates=()=>read<Certificate[]>('credvault_certificates',seedCertificates)
export const saveApplications=(v:Application[])=>localStorage.setItem('credvault_applications',JSON.stringify(v))
export const saveCertificates=(v:Certificate[])=>localStorage.setItem('credvault_certificates',JSON.stringify(v))
export const nextId=(prefix:string,items:{id:string}[])=>`${prefix}-${String(items.length+1).padStart(4,'0')}`
export const dateLabel=(value:string)=>new Date(value).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})
